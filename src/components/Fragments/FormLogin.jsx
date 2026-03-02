import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import api from "../../services/api";

const FormLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Semua field wajib diisi");
      return;
    }

    try {
      setLoading(true);

      const { data } = await api.post("/api/auth/login", {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", data.token);

      if (data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/member/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputForm
        type="email"
        id="email"
        placeholder="Masukkan email"
        value={form.email}
        onChange={handleChange}
        icon={<Mail size={18} />}
        required
      />

      <InputForm
        type={showPassword ? "text" : "password"}
        id="password"
        placeholder="Masukkan password"
        value={form.password}
        onChange={handleChange}
        icon={<Lock size={18} />}
        rightIcon={showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        onRightIconClick={() => setShowPassword(!showPassword)}
        required
      />

      <Button type="submit" fullWidth size="md">
        {loading ? "Loading..." : "LOGIN"}
      </Button>
    </form>
  );
};

export default FormLogin;
