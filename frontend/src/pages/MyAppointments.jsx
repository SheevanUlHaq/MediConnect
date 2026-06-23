import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <h1 className="pb-6 mt-12 font-semibold tracking-wide text-2xl border-b border-gray-300">
        My Appointmnets
      </h1>
      <div>
        {doctors.slice(0, 3).map((doc, idx) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-gray-300"
            key={idx}
          >
            <div>
              <img className="w-32 bg-indigo-50" src={doc.image} alt="" />
            </div>
            {/* Appointment data of doctor*/}
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{doc.name}</p>
              <p>{doc.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs ml-2">{doc.address.line1}</p>
              <p className="text-xs ml-2">{doc.address.line2}</p>
              <p className="text-sm mt-1 text-neutral-700 font-medium">
                Date & Time:{" "}
                <span className="text-xs font-normal">
                  25, July, 2024 | 8:30 PM
                </span>
              </p>
            </div>
            <div></div>
            {/* CTA's */}
            <div className="flex flex-col justify-end gap-2">
              <button className="text-sm text-center sm:min-w-48 py-2 border rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300">
                Pay Online
              </button>
              <button className="text-sm text-center sm:min-w-48 py-2 border rounded-lg text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300">
                Cancel Appointmnet
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
