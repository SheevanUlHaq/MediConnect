import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

const Login = () => {
  const { token, setToken, backendUrl } = useContext(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (!data.success) {
          toast.error(data.message);
        } else {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (!data.success) {
          toast.error(data.message);
        } else {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{state}</h1>

          <p className="text-gray-500 mt-2">Welcome to MediConnect</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={onSubmitHandler}>
          {state === "Sign Up" && (
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-primary"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-primary"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-primary"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {/* {state === "Sign In" && (
            <div className="flex justify-end">
              <button
                type="button"
                className="text-primary text-sm hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )} */}

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition-all"
          >
            {state === "Sign Up" ? "Create Account" : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          {state === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setState("Sign In")}
                className="text-primary font-medium hover:underline"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setState("Sign Up")}
                className="text-primary font-medium hover:underline"
              >
                Create Account
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
