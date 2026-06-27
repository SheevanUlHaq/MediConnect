import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";

import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AddDoctor from "./pages/Admin/AddDoctor";
import AllAppointments from "./pages/Admin/AllAppointments";
import AllDoctors from "./pages/Admin/AllDoctors";

const App = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <>
      <ToastContainer />

      {aToken ? (
        <div className="bg-blue-50/50">
          <Navbar />
          <div className="flex items-start">
            <Sidebar />
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/admin-dashboard" element={<Dashboard />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/all-appointments" element={<AllAppointments />} />
              <Route path="/all-doctors" element={<AllDoctors />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </>
  );
};

export default App;
