import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-500">
      <img
        onClick={() => navigate("/")}
        className="w-60 h-20 object-cover cursor-pointer"
        src={assets.mediConnectLogo}
        alt="Prescripto"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4 cursor-pointer">
        {token ? (
          <div className="relative">
            <div
              onClick={() => setShowDropdown((prev) => !prev)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img
                className="w-8 rounded-full"
                src={assets.profile_pic}
                alt=""
              />

              <img
                className={`w-2.5 transition-transform duration-300 ${
                  showDropdown ? "rotate-180" : ""
                }`}
                src={assets.dropdown_icon}
                alt=""
              />
            </div>

            {showDropdown && (
              <div className="absolute right-0 top-12 z-50">
                <div className="min-w-52 bg-white border border-gray-100 rounded-2xl shadow-xl p-2 flex flex-col">
                  <button
                    onClick={() => {
                      navigate("/my-profile");
                      setShowDropdown(false);
                    }}
                    className="text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={() => {
                      navigate("/my-appointments");
                      setShowDropdown(false);
                    }}
                    className="text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition"
                  >
                    My Appointments
                  </button>

                  <hr className="my-1 border-gray-100" />

                  <button
                    onClick={() => {
                      setToken(false);
                      setShowDropdown(false);
                    }}
                    className="text-left px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Get Started
          </button>
        )}

        <img
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          className="w-6 md:hidden"
        />

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 md:hidden ${
            showMenu ? "visible opacity-100" : "invisible opacity-0"
          } transition-all duration-300`}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowMenu(false)}
          />

          {/* Drawer */}
          <div
            className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-white rounded-l-3xl shadow-2xl transition-transform duration-300 ${
              showMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
              <img
                src={assets.mediConnectLogo}
                alt="MediConnect"
                className="h-20 w-45 object-cover"
              />

              <button
                onClick={() => setShowMenu(false)}
                className="text-3xl text-gray-500"
              >
                ×
              </button>
            </div>

            {/* Nav Links */}
            <div className="p-5 flex flex-col gap-2">
              <NavLink
                to="/"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `mobile-link flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-medium ${
                    isActive ? "mobile-link-active" : "text-gray-700"
                  }`
                }
              >
                Home
                <span>→</span>
              </NavLink>

              <NavLink
                to="/doctors"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `mobile-link flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-medium ${
                    isActive ? "mobile-link-active" : "text-gray-700"
                  }`
                }
              >
                Doctors
                <span>→</span>
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `mobile-link flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-medium ${
                    isActive ? "mobile-link-active" : "text-gray-700"
                  }`
                }
              >
                About
                <span>→</span>
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `mobile-link flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-medium ${
                    isActive ? "mobile-link-active" : "text-gray-700"
                  }`
                }
              >
                Contact
                <span>→</span>
              </NavLink>
            </div>

            {/* CTA */}
            <div className="absolute bottom-6 left-5 right-5">
              <button
                onClick={() => {
                  navigate("/login");
                  setShowMenu(false);
                }}
                className="w-full bg-primary text-white py-4 rounded-2xl font-semibold active:scale-[0.98] transition-transform"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
