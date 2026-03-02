import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Mail, User, Lock, Eye, EyeOff } from "lucide-react"
import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
import api from "../../services/api"

const FormRegister = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.password !== form.confirmPassword) {
      alert("Password tidak sama")
      return
    }

    try {
      setLoading(true)

      const { data } = await api.post("/api/auth/register", {
        name: form.username,
        email: form.email,
        password: form.password,
      })

      localStorage.setItem("token", data.token)

      if (data.user.role === "admin") {
        navigate("/admin/dashboard")
      } else {
        navigate("/member/dashboard")
      }
    } catch (error) {
      alert(error.response?.data?.message || "Terjadi kesalahan")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputForm
        type="email"
        id="email"
        placeholder="Masukkan email"
        value={form.email}
        onChange={handleChange}
        icon={<Mail size={18} strokeWidth={2.2} />}
        required
      />

      <InputForm
        type="text"
        id="username"
        placeholder="Masukkan username"
        value={form.username}
        onChange={handleChange}
        icon={<User size={18} strokeWidth={2.2} />}
        required
      />

      <InputForm
        type={showPassword ? "text" : "password"}
        id="password"
        placeholder="Masukkan password"
        value={form.password}
        onChange={handleChange}
        icon={<Lock size={18} strokeWidth={2.2} />}
        rightIcon={showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        onRightIconClick={() => setShowPassword(!showPassword)}
        required
      />

      <InputForm
        type={showConfirm ? "text" : "password"}
        id="confirmPassword"
        placeholder="Konfirmasi password"
        value={form.confirmPassword}
        onChange={handleChange}
        icon={<Lock size={18} strokeWidth={2.2} />}
        rightIcon={showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
        onRightIconClick={() => setShowConfirm(!showConfirm)}
        required
      />

      <Button type="submit" fullWidth size="md">
        {loading ? "Loading..." : "Daftar"}
      </Button>
    </form>
  )
}

export default FormRegister