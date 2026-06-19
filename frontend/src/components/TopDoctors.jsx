import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const { doctors } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-sm text-center">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((doctor, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/appointment/${doctor._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500"
          >
            <img
              className="bg-violet-200/30 rounded-t-2xl"
              src={doctor.image}
              alt=""
            />
            <div className="p-4">
              <div className="text-green-500 flex gap-2 items-center text-sm text-center">
                <div className="w-2 h-2 rounded-full bg-green-600" />
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
              <p className="text-gray-600 text-sm">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;
