import { useContext, useState } from "react";
import { Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";

const Login = () => {
  const [role, setRole] = useState("Admin");
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (role === "Admin") {
        const { data } = await axios.post(
          import.meta.env.VITE_BACKEND_URL + "/api/admin/login",
          { email, password },
        );
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
          toast.success("Login Successful");
        } else {
          toast.error(data.message);
        }
      } else {
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-5">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md rounded-3xl bg-white border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8"
      >
        {/* Logo */}
        <div className="flex justify-center mb-7">
          <div className="w-16 h-16">
            <img
              src={assets.mediConnectFavicon}
              alt="MediConnect"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Welcome Back</h1>

          <p className="text-slate-500 mt-2 text-sm">
            Access the MediConnect Management Portal
          </p>
        </div>

        {/* Role Switch */}
        <div className="flex bg-slate-100 rounded-xl p-1 mb-7">
          {["Admin", "Doctor"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setRole(item)}
              className={`flex-1 py-2.5 rounded-lg font-medium transition-all ${
                role === item
                  ? "bg-primary text-white shadow"
                  : "text-slate-600 hover:text-primary"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Email */}
        <div className="relative mb-5">
          <Mail
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full h-13 rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <LockKeyhole
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            className="w-full h-13 rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-12 outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition"
          >
            {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-13 rounded-xl bg-primary text-white font-semibold transition-all hover:brightness-110 active:scale-[0.98]"
        >
          Sign In
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Restricted access for authorized Admins and Doctors.
        </p>
      </form>
    </div>
  );
};

export default Login;
