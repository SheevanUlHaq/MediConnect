import React from "react";
import { assets } from "../assets/assets";
import { Mail, Phone } from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div className="relative -top-8">
          <img
            className="w-50 h-20 object-cover"
            src={assets.mediConnectLogo}
            alt=""
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Connecting patients with trusted healthcare professionals through a
            seamless digital experience. Book appointments, consult doctors,
            manage medical records, and access quality healthcare anytime,
            anywhere.
          </p>
        </div>
        {/* Center Section */}
        <div>
          <p className="text-lg font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col text-gray-600 gap-2">
            <li>
              <NavLink to="/" className="hover:text-primary transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-primary transition">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-primary transition">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-primary transition">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className="text-lg font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col text-gray-600 gap-2">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              <a
                href="tel:+919876543210"
                className="hover:text-primary transition"
              >
                +91-9876543210
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-primary" />
              <a
                href="mailto:sheevan12345@gmail.com"
                className="hover:text-primary transition"
              >
                support@mediconnect.com
              </a>
            </div>
          </ul>
        </div>
      </div>

      {/* Copyright Text */}
      <div>
        <hr />
        <div className="py-5 text-sm text-center leading-6">
          <p>© 2026 MediConnect. All Rights Reserved.</p>
          <p>
            Designed & Developed by{" "}
            <span className="font-semibold">Sheevan Ul Haq</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
