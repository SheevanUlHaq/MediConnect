import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [userData, setUserData] = useState({
    name: "Sheevan Ul Haq",
    image: assets.profile_pic,
    email: "sheevan12345@gmail.com",
    phone: "+91 8791207120",
    address: {
      line1: "NIT Bhopal",
      line2: "Madhya Pradesh, India",
    },
    gender: "Male",
    dob: "31-12-2001",
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-3xl shadow-lg p-8">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={userData.image}
            alt=""
            className="w-36 h-36 rounded-full object-cover border-4 border-primary/20"
          />

          <div className="flex-1 text-center sm:text-left">
            {isEdit ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                className="w-full max-w-full text-2xl sm:text-3xl font-bold border-b outline-none bg-transparent"
              />
            ) : (
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 wrap-break-word">
                {userData.name}
              </h1>
            )}

            <p className="text-gray-500 mt-2 wrap-break-word">
              Manage your personal information and preferences.
            </p>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold text-primary mb-4">
            Contact Information
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-500 text-sm">Email Address</label>

              <p className="text-gray-800 mt-1">{userData.email}</p>
            </div>

            <div>
              <label className="text-gray-500 text-sm">Phone Number</label>

              {isEdit ? (
                <input
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  className="w-full mt-1 border rounded-lg px-3 py-2 outline-none"
                />
              ) : (
                <p className="text-gray-800 mt-1">{userData.phone}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label className="text-gray-500 text-sm">Address</label>

              {isEdit ? (
                <div>
                  <input
                    type="text"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                    className="w-full mt-1 border rounded-lg px-3 py-2 outline-none"
                  />
                  <input
                    type="text"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                    className="w-full mt-1 border rounded-lg px-3 py-2 outline-none"
                  />
                </div>
              ) : (
                <div>
                  <p className="text-gray-800 mt-1">{userData.address.line1}</p>
                  <p className="text-gray-800 mt-1">{userData.address.line2}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Basic Information */}
        <div>
          <h2 className="text-lg font-semibold text-primary mb-4">
            Basic Information
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-500 text-sm">Gender</label>

              {isEdit ? (
                <select
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      gender: e.target.value,
                    }))
                  }
                  className="w-full mt-1 border rounded-lg px-3 py-2 outline-none"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              ) : (
                <p className="text-gray-800 mt-1">{userData.gender}</p>
              )}
            </div>

            <div>
              <label className="text-gray-500 text-sm">Date of Birth</label>

              {isEdit ? (
                <input
                  type="date"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      dob: e.target.value,
                    }))
                  }
                  className="w-full mt-1 border rounded-lg px-3 py-2 outline-none"
                />
              ) : (
                <p className="text-gray-800 mt-1">{userData.dob}</p>
              )}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setIsEdit(!isEdit)}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all"
          >
            {isEdit ? "Save Information" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
