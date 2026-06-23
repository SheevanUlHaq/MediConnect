import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);

  const [relDocs, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      let docData = doctors.filter(
        (doc) => doc._id != docId && doc.speciality === speciality,
      );
      setRelDocs(docData);
    }
  }, [doctors, speciality, docId]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-2xl font-medium">Related Doctors</h1>
      <p className="sm:w-1/3 text-sm text-center">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="flex flex-wrap gap-6 w-full">
        {relDocs.slice(0, 5).map((doctor, idx) => (
          <div
            key={idx}
            onClick={() => {
              navigate(`/appointment/${doctor._id}`);
            }}
            className="w-50 border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500"
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
    </div>
  );
};

export default RelatedDoctors;
