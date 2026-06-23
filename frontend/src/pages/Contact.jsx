import React from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-12">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-wider">
          Contact Us
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          We're Here To Help
        </h1>

        <p className="max-w-2xl mx-auto text-gray-500 mt-4">
          Have questions, feedback, or need assistance? Reach out to our team
          and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <MapPin className="text-primary mb-4" size={32} />
          <h3 className="font-semibold text-lg">Location</h3>
          <p className="text-gray-600 mt-2">
            NIT Bhopal, Madhya Pradesh, India
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <Phone className="text-primary mb-4" size={32} />
          <h3 className="font-semibold text-lg">Phone</h3>
          <p className="text-gray-600 mt-2">+91-9876543210</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <Mail className="text-primary mb-4" size={32} />
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-600 mt-2">support@mediconnect.com</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <Clock className="text-primary mb-4" size={32} />
          <h3 className="font-semibold text-lg">Working Hours</h3>
          <p className="text-gray-600 mt-2">
            Mon - Sun
            <br />
            10:00 AM - 9:00 PM
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Talk</h2>

          <p className="text-gray-600 leading-7">
            Whether you need help booking an appointment, have technical
            questions, or simply want to share feedback, we'd love to hear from
            you.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <h4 className="font-semibold">Support Team</h4>
              <p className="text-gray-600">
                Available to assist you with appointments and platform issues.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Response Time</h4>
              <p className="text-gray-600">Typically within 24 hours.</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div className="mb-5">
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            Send Message
            <Send size={18} />
          </button>
        </form>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-primary">500+</h3>
          <p className="text-gray-600">Doctors</p>
        </div>

        <div className="text-center">
          <h3 className="text-4xl font-bold text-primary">10K+</h3>
          <p className="text-gray-600">Appointments</p>
        </div>

        <div className="text-center">
          <h3 className="text-4xl font-bold text-primary">20+</h3>
          <p className="text-gray-600">Specialities</p>
        </div>

        <div className="text-center">
          <h3 className="text-4xl font-bold text-primary">99%</h3>
          <p className="text-gray-600">Satisfaction</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary rounded-3xl text-center py-14 px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need A Doctor Today?
        </h2>

        <p className="text-white/80 mb-8">
          Find trusted healthcare professionals and book appointments in
          minutes.
        </p>

        <button
          onClick={() => {
            navigate("/doctors");
          }}
          className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
        >
          Book Appointment →
        </button>
      </div>
    </div>
  );
};

export default Contact;
