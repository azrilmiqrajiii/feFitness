import { useState } from "react";
import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button";
const FormLogin = () => {
  const [remember, setRemember] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
        <InputForm type={"email"} placeholder={"Masukkan email"} id={"email"} />
      </div>

      <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
        <InputForm
          type={"password"}
          placeholder={"Masukkan password"}
          id={"password"}
        />
      </div>

      <div className="flex justify-between items-center text-xs text-gray-300">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
            className="accent-emerald-500"
          />
          Remember me
        </label>

        <button
          type="button"
          className="italic hover:text-white transition bg-none"
        >
          Forgot Password?
        </button>
      </div>

      <Button type="submit" fullWidth size="md">
        LOGIN
      </Button>
    </form>
  );
};

export default FormLogin;
