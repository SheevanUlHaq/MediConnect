import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } },
      );
      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setImage(false);
        setIsEdit(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    userData && (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={image ? URL.createObjectURL(image) : userData.image}
                alt=""
                className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg"
              />

              {isEdit && (
                <>
                  <label
                    htmlFor="image"
                    className="absolute bottom-2 right-2 bg-primary text-white p-3 rounded-full cursor-pointer hover:scale-105 transition"
                  >
                    <img src={assets.upload_icon} className="w-5 h-5" alt="" />
                  </label>

                  <input
                    hidden
                    id="image"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </>
              )}
            </div>

            {/* User Details */}
            <div className="flex-1">
              {isEdit ? (
                <input
                  value={userData.name}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="text-4xl font-bold border-b-2 border-primary outline-none w-full bg-transparent"
                />
              ) : (
                <h1 className="text-4xl font-bold text-gray-800">
                  {userData.name}
                </h1>
              )}

              <p className="text-gray-400 mt-3 max-w-md">
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
                    <p className="text-gray-800 mt-1">
                      {userData.address.line1}
                    </p>
                    <p className="text-gray-800 mt-1">
                      {userData.address.line2}
                    </p>
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
              onClick={() => {
                isEdit ? updateUserProfileData() : setIsEdit(!isEdit);
              }}
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all"
            >
              {isEdit ? "Save Information" : "Edit Profile"}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default MyProfile;
