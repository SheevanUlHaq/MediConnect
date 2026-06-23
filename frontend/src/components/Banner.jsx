import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary flex rounded-lg px-6 sm:px-10 md:px-12 lg:px-14 my-20 md:mx-10">
      {/* Left Side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointmnet</p>
          <p className="mt-4 mb-10">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="bg-white text-primary font-semibold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Get Started
        </button>
      </div>
      {/* Right SIde */}
      <div className="hidden md:block w-1/3 lg:w-92.5 relative">
        <img
          className="absolute right-0 bottom-0"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
