import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AdminContext } from "../../context/AdminContext";

const AllDoctors = () => {
  const { aToken, doctors, getAllDoctors, changeAvailability } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="w-full min-h-screen bg-slate-50 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Doctors</h1>
          <p className="text-slate-500 mt-1">Manage all registered doctors</p>
        </div>

        <div className="rounded-2xl bg-white px-6 py-3 shadow-sm border border-slate-200">
          <p className="text-xs text-slate-500">Total Doctors</p>
          <h2 className="text-2xl font-bold text-cyan-600">{doctors.length}</h2>
        </div>
      </div>

      {/* Doctors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {doctors.map((doctor, idx) => (
          <div
            key={idx}
            className={`group overflow-hidden rounded-3xl border transition-all duration-300
          ${
            doctor.available
              ? "bg-white border-slate-200 hover:-translate-y-2 hover:shadow-2xl"
              : "bg-slate-100 border-slate-300 opacity-90"
          }`}
          >
            {/* Cover */}
            <div
              className={`relative h-28 bg-slate-3000 ${doctor.available ? "bg-linear-to-r from-cyan-500 to-blue-600" : ""}`}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className={`absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full border-4 border-white object-cover transition duration-300
              ${
                doctor.available
                  ? "group-hover:scale-105"
                  : "grayscale brightness-90"
              }`}
              />
            </div>

            {/* Content */}
            <div className="pt-20 px-6 pb-6 text-center">
              <h2 className="text-xl font-semibold text-slate-800">
                {doctor.name}
              </h2>

              <p className="mt-1 text-sm font-medium text-cyan-600">
                {doctor.speciality}
              </p>

              {/* Availability */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      doctor.available ? "bg-green-500" : "bg-gray-400"
                    }`}
                  ></span>

                  <span
                    className={`text-sm font-medium ${
                      doctor.available ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    {doctor.available ? "Available" : "Unavailable"}
                  </span>
                </div>

                {/* Toggle */}
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={doctor.available}
                    onChange={() => changeAvailability(doctor._id)}
                    className="peer sr-only"
                  />

                  <div
                    className="h-6 w-11 rounded-full bg-gray-300 transition-all
                  peer-checked:bg-cyan-500
                  after:absolute
                  after:left-0.5
                  after:top-0.5
                  after:h-5
                  after:w-5
                  after:rounded-full
                  after:bg-white
                  after:transition-all
                  peer-checked:after:translate-x-5"
                  ></div>
                </label>
              </div>

              {/* Button */}
              <button className="mt-6 w-full rounded-xl border border-cyan-600 py-2.5 text-sm font-semibold text-cyan-600 transition-all hover:bg-cyan-600 hover:text-white">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDoctors;
