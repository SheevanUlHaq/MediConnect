import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const { speciality } = useParams();

  const specialities = [...new Set(doctors.map((doctor) => doctor.speciality))];

  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctor specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* <div className="w-full sm:w-2/5 lg:w-1/5 flex flex-col gap-4">
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`${speciality === "General physician" ? "bg-primary/30 border-primary/50" : "text-gray-600"} border border-gray-400 px-4 py-2 text-sm rounded-md cursor-pointer hover:text-black hover:border-black transition-all duration-300`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`${speciality === "Gynecologist" ? "bg-primary/30 border-primary/50" : "text-gray-600"} border border-gray-400 px-4 py-2 text-sm rounded-md cursor-pointer hover:text-black hover:border-black transition-all duration-300`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`${speciality === "Dermatologist" ? "bg-primary/30 border-primary/50" : "text-gray-600"} border border-gray-400 px-4 py-2 text-sm rounded-md cursor-pointer hover:text-black hover:border-black transition-all duration-300`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`${speciality === "Pediatricians" ? "bg-primary/30 border-primary/50" : "text-gray-600"} border border-gray-400 px-4 py-2 text-sm rounded-md cursor-pointer hover:text-black hover:border-black transition-all duration-300`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`${speciality === "Neurologist" ? "bg-primary/30 border-primary/50" : "text-gray-600"} border border-gray-400 px-4 py-2 text-sm rounded-md cursor-pointer hover:text-black hover:border-black transition-all duration-300`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`${speciality === "Gastroenterologist" ? "bg-primary/30 border-primary/50" : "text-gray-600"} border border-gray-400 px-4 py-2 text-sm rounded-md cursor-pointer hover:text-black hover:border-black transition-all duration-300`}
          >
            Gastroenterologist
          </p>
        </div> */}

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
              showFilter
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-200 shadow-sm"
            }`}
          >
            Filters
          </button>

          {speciality && (
            <button
              onClick={() => {
                navigate("/doctors");
                setShowFilter(false);
              }}
              className="px-4 py-2 rounded-full text-sm font-medium border border-red-200 text-red-500 bg-red-50"
            >
              Reset Filter
            </button>
          )}
        </div>
        <div
          className={`w-full sm:w-2/5 lg:w-1/5 sm:flex flex-col gap-4 ${showFilter ? "flex" : "hidden"}`}
        >
          {specialities.map((spec) => (
            <p
              key={spec}
              onClick={() => {
                if (speciality === spec) {
                  navigate("/doctors");
                } else {
                  navigate(`/doctors/${spec}`);
                }

                setShowFilter(false);
              }}
              className={`${
                speciality === spec
                  ? "bg-primary/30 border-primary/50"
                  : "text-gray-600"
              } border border-gray-400 px-4 py-2 text-sm rounded-md cursor-pointer hover:text-black hover:border-black transition-all duration-300`}
            >
              {spec}
            </p>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterDoc.map((doctor, idx) => (
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
                <p className="text-gray-900 text-lg font-medium">
                  {doctor.name}
                </p>
                <p className="text-gray-600 text-sm">{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
