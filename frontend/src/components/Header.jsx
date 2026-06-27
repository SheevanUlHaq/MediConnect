import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#f8fbff] via-[#f3f7ff] to-[#edf4ff]">
      {/* Decorative Blur */}
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 items-center min-h-135">
          {/* Left */}

          <div className="z-10">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-primary text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Trusted by 5000+ Patients
            </div>

            {/* Heading */}

            <h1 className="mt-7 text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Book Appointment
              <br />
              With <span className="text-primary">Trusted</span>
              <br />
              <span className="text-primary">Doctors</span>
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-600">
              Connect with experienced doctors across multiple specialties,
              schedule appointments instantly and receive quality healthcare
              from the comfort of your home.
            </p>

            {/* Patients */}

            <div className="mt-8 flex items-center gap-4">
              <img
                src={assets.mediConnect_group_badge}
                alt=""
                className="w-32"
              />

              <div>
                <p className="font-semibold text-gray-800 text-lg">
                  100+ Verified Doctors
                </p>

                <p className="text-gray-500">Book in less than 2 minutes</p>
              </div>
            </div>

            {/* Button */}

            <a
              href="#speciality"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 duration-300"
            >
              Book Appointment
              <img src={assets.arrow_icon} alt="" className="w-4 invert" />
            </a>
          </div>

          {/* Right */}

          <div className="relative flex justify-center items-end">
            {/* Background Circle */}

            <div className="absolute bottom-0 h-[420px] w-[420px] rounded-full bg-blue-100"></div>

            {/* Doctors */}

            <img
              src={assets.mediConnect_group}
              alt="Doctors"
              className="relative w-full max-w-[620px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
