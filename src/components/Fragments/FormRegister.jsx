import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button";
import api from "../../services/api";

const FormRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password tidak sama");
      return;
    }

    try {
      setLoading(true);

      const { data } = await api.post("/api/auth/register", {
        name: form.username,
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
      alert(error.response?.data?.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
        <InputForm
          type="email"
          placeholder="Masukkan email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
        <InputForm
          type="text"
          placeholder="Masukkan username"
          id="username"
          value={form.username}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
        <InputForm
          type="password"
          placeholder="Masukkan password"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
        <InputForm
          type="password"
          placeholder="Konfirmasi password"
          id="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" fullWidth size="md">
        {loading ? "Loading..." : "Daftar"}
      </Button>
    </form>
  );
};

export default FormRegister;
