import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";

const AddDoctor = () => {
  const { aToken } = useContext(AdminContext);

  const [docImg, setDocImg] = useState(false);
  const [docData, setDocData] = useState({
    name: "",
    email: "",
    password: "",
    experience: "1 Year",
    fees: "",
    speciality: "General Physician",
    degree: "",
    address1: "",
    address2: "",
    about: "",
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        toast.error("Image Not Selected");
        return;
      }

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", docData.name);
      formData.append("email", docData.email);
      formData.append("password", docData.password);
      formData.append("experience", docData.experience);
      formData.append("fees", Number(docData.fees));
      formData.append("speciality", docData.speciality);
      formData.append("degree", docData.degree);
      formData.append(
        "address",
        JSON.stringify({
          line1: docData.address1,
          line2: docData.address2,
        }),
      );
      formData.append("about", docData.about);

      const { data } = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } },
      );

      if (data.success) {
        toast.success(data.message);
        setDocData({
          name: "",
          email: "",
          password: "",
          experience: "1 Year",
          fees: "",
          speciality: "General Physician",
          degree: "",
          address1: "",
          address2: "",
          about: "",
        });
        setDocImg(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-6 w-full">
      <p className="mb-6 text-2xl font-semibold text-slate-800">Add Doctor</p>
      {/* Form Content */}
      <div className="bg-white border border-slate-200 shadow-2xl shadow-gray rounded-3xl p-8 md:p-10 max-w-5xl max-h-[82vh] overflow-y-auto">
        {/* Doctor Image */}
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p>
            Upload doctor <br />
            picture
          </p>
        </div>

        {/* Doctor Data */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left side of Form */}
          <div className="w-full flex flex-col lg:flex-1 gap-5">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700"
                htmlFor="name"
              >
                Doctor Name
              </label>
              <input
                onChange={(e) =>
                  setDocData({ ...docData, name: e.target.value })
                }
                value={docData.name}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                type="text"
                id="name"
                placeholder="Enter doctor's full name"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700"
                htmlFor="email"
              >
                Doctor Email
              </label>
              <input
                onChange={(e) =>
                  setDocData({ ...docData, email: e.target.value })
                }
                value={docData.email}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                type="email"
                id="email"
                placeholder="doctor@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700"
                htmlFor="password"
              >
                Doctor Password
              </label>
              <input
                onChange={(e) =>
                  setDocData({ ...docData, password: e.target.value })
                }
                value={docData.password}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                type="password"
                id="password"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700"
                htmlFor="experience"
              >
                Experience
              </label>
              <select
                onChange={(e) =>
                  setDocData({ ...docData, experience: e.target.value })
                }
                value={docData.experience}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                id="experience"
                required
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="6 Years">6 Years</option>
                <option value="7 Years">7 Years</option>
                <option value="8 Years">8 Years</option>
                <option value="9 Years">9 Years</option>
                <option value="10+ Years">10+ Years</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700"
                htmlFor="fees"
              >
                Consultation Fees (₹)
              </label>
              <input
                onChange={(e) =>
                  setDocData({ ...docData, fees: e.target.value })
                }
                value={docData.fees}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                type="number"
                id="fees"
                placeholder="Enter consultation fee"
                min="0"
                required
              />
            </div>
          </div>

          {/* Right Side of Form */}
          <div className="w-full flex flex-col lg:flex-1 gap-5">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700"
                htmlFor="speciality"
              >
                Speciality
              </label>
              <select
                onChange={(e) =>
                  setDocData({ ...docData, speciality: e.target.value })
                }
                value={docData.speciality}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                id="speciality"
                required
              >
                <option value="General Physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700"
                htmlFor="degree"
              >
                Degree
              </label>
              <input
                onChange={(e) =>
                  setDocData({ ...docData, degree: e.target.value })
                }
                value={docData.degree}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                type="text"
                id="degree"
                placeholder="e.g. MBBS, MD"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700"
                htmlFor="address1"
              >
                Address
              </label>

              <input
                onChange={(e) =>
                  setDocData({ ...docData, address1: e.target.value })
                }
                value={docData.address1}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                type="text"
                id="address1"
                placeholder="Address Line 1"
                required
              />

              <input
                onChange={(e) =>
                  setDocData({ ...docData, address2: e.target.value })
                }
                value={docData.address2}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                type="text"
                id="address2"
                placeholder="Address Line 2"
                required
              />
            </div>
          </div>
        </div>

        {/* Doctor's About */}
        <div className="mt-6 flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-slate-700"
            htmlFor="about"
          >
            About Doctor
          </label>

          <textarea
            onChange={(e) => setDocData({ ...docData, about: e.target.value })}
            value={docData.about}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 resize-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
            id="about"
            rows={5}
            placeholder="Write a brief introduction about the doctor, including expertise, experience, and achievements..."
            required
          ></textarea>
        </div>

        {/* Submit Form */}
        <div className="mt-8">
          <button
            type="submit"
            className="rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
          >
            Add Doctor
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
