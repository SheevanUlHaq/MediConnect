import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
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
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className="text-lg font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col text-gray-600 gap-2">
            <li>+91-9876543210</li>
            <li>support@mediconnect.com</li>
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
