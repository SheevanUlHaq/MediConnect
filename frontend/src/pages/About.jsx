import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Fast Booking",
      desc: "Book appointments with trusted doctors in just a few clicks.",
      icon: "⚡",
    },
    {
      title: "Verified Doctors",
      desc: "Connect with experienced and verified healthcare professionals.",
      icon: "🩺",
    },
    {
      title: "Secure Platform",
      desc: "Your personal and medical information stays safe and protected.",
      icon: "🔒",
    },
    {
      title: "Easy Management",
      desc: "Manage appointments, schedules, and consultations effortlessly.",
      icon: "📅",
    },
  ];

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-12">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-sm text-primary font-semibold tracking-widest uppercase">
          About MediConnect
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Healthcare Made Simple
        </h1>

        <p className="max-w-3xl mx-auto text-gray-500 mt-4">
          MediConnect helps patients discover trusted healthcare professionals,
          schedule appointments, and manage their healthcare journey with ease.
        </p>
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="lg:w-1/2">
          <img
            src={assets.about_image}
            alt="About MediConnect"
            className="rounded-2xl shadow-lg lg:h-110 object-cover"
          />
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Connecting Patients With Trusted Doctors
          </h2>

          <p className="text-gray-600 leading-7 mb-5">
            At MediConnect, we believe quality healthcare should be accessible
            to everyone. Our platform bridges the gap between patients and
            healthcare professionals by providing a seamless appointment booking
            experience.
          </p>

          <p className="text-gray-600 leading-7 mb-8">
            Whether you're looking for a specialist, scheduling a routine
            consultation, or managing your appointments, MediConnect ensures a
            smooth and hassle-free experience.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-primary">500+</h3>
              <p className="text-gray-600">Verified Doctors</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">10K+</h3>
              <p className="text-gray-600">Appointments</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">20+</h3>
              <p className="text-gray-600">Specialities</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">99%</h3>
              <p className="text-gray-600">Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h3>

          <p className="text-gray-600 leading-7">
            To make healthcare more accessible by providing a simple, reliable,
            and secure platform where patients can easily connect with trusted
            healthcare professionals.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Vision
          </h3>

          <p className="text-gray-600 leading-7">
            To become the most trusted digital healthcare platform, empowering
            people to take control of their health through technology and
            seamless access to medical expertise.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose MediConnect?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary rounded-3xl text-center py-14 px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Take Charge Of Your Health?
        </h2>

        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Book appointments with trusted doctors anytime, anywhere, and
          experience healthcare the modern way.
        </p>

        <button
          onClick={() => {
            navigate("/doctors");
          }}
          className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
        >
          Book Appointment →
        </button>
      </div>
    </div>
  );
};

export default About;
