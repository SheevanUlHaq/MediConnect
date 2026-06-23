import React, { useContext, useEffect, useEffectEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const doctor = doctors.find((doc) => doc._id === docId);
    setDocInfo(doctor);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);
      // getting end time with index
      let endTime = new Date();
      endTime.setDate(currentDate.getDate());
      endTime.setHours(21, 1, 0, 0);

      // If current date is today
      if (currentDate.getDate() === today.getDate()) {
        // Appointment will start from next hour if past 10
        currentDate.getHours() > 10
          ? currentDate.setHours(currentDate.getHours() + 1)
          : currentDate.setHours(10);
        // Appointment will start atleast after half an hour
        currentDate.getMinutes() > 30
          ? currentDate.setMinutes(30)
          : currentDate.setMinutes(0);
      }
      // And in other days appoinment will start from 10:00 A.M.
      else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      // Now making slots from start-time to end-time
      let timeSlots = [];
      while (currentDate <= endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        //Increment time by 30 mins
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  if (docInfo) {
    return (
      <div>
        {/* Doctor details */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Doctor Image */}
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>

          {/* Name, Degree, Experience & About*/}
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 -mt-20 sm:mt-0">
            <h1 className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </h1>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-175 mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-700">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-gray-700 font-medium">
          <p className="text-xl">Booking Slots</p>
          <div className="flex gap-3 items-center w-full mt-4 overflow-x-scroll">
            {docSlots.length &&
              docSlots.map((item, idx) => (
                <div
                  onClick={() => setSlotIndex(idx)}
                  className={`text-center py-4 md:py-6 min-w-18 rounded-full cursor-pointer ${slotIndex === idx ? "bg-primary text-white" : "border border-gray-300"}`}
                  key={idx}
                >
                  <p>{item[0] && days[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex gap-3 items-center w-full mt-4 overflow-x-scroll">
            {docSlots.length &&
              docSlots[slotIndex].map((item, idx) => (
                <div
                  onClick={() => setSlotTime(item.time)}
                  key={idx}
                  className={`text-sm font-light flex shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? "bg-primary text-white" : "text-gray-400 border border-gray-300"}`}
                >
                  {item.time.toLowerCase()}
                </div>
              ))}
          </div>
          <button className="bg-primary text-white px-6 md:px-14 py-3 rounded-full tex-sm font-light my-6">
            Book an appointment
          </button>
        </div>

        {/* Listing Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    );
  }
};

export default Appointment;
