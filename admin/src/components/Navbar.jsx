import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import { AdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    aToken && localStorage.removeItem("aToken");
    aToken && setAToken("");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center px-4 pt-2 sm:px-10 border-b bg-white">
      <div className="flex items-center gap-3 text-xs">
        <img
          className="w-38 sm:w-45 cursor-pointer h-16 object-cover"
          src={assets.mediConnectAdmin}
          alt="Medi Connect"
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logout}
        className="flex items-center gap-2 rounded-lg border border-red-300 bg-white px-5 py-2 text-sm font-medium cursor-pointer text-red-700 transition-all hover:bg-red-50 hover:border-red-400"
      >
        Logout
        <LogOut size={16} />
      </button>
    </div>
  );
};

export default Navbar;
