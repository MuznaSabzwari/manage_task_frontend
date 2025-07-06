import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.webp";
import Header from "../Component/Header.js";
import Footer from "../Component/Footer.js";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Contact: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:3005/Register/addUsers", formData);
      setSuccess("Account created successfully!");
      setFormData({ Name: "", Email: "", Password: "", Contact: "" });

      // Redirect to login/dashboard after short delay
      setTimeout(() => navigate("/Login"), 1500);
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      <Header />
      <section className="bg-gray-50 dark:bg-black min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg shadow dark:border bg-gray-900 p-6">
          <div className="flex items-center justify-center mb-6 space-x-2">
            <img className="size-12 rounded-full" src={logo} alt="logo" />
            <span className="text-2xl font-semibold text-white">Taskco</span>
          </div>

          <h1 className="text-xl font-bold leading-tight text-white mb-4">
            Create a new account
          </h1>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Your Name</label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="bg-gray-700 text-white border border-gray-600 rounded-lg w-full p-2.5"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-white">Your Email</label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                required
                className="bg-gray-700 text-white border border-gray-600 rounded-lg w-full p-2.5"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-white">Password</label>
              <input
                type="password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                required
                className="bg-gray-700 text-white border border-gray-600 rounded-lg w-full p-2.5"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-white">Contact</label>
              <input
                type="text"
                name="Contact"
                value={formData.Contact}
                onChange={handleChange}
                required
                className="bg-gray-700 text-white border border-gray-600 rounded-lg w-full p-2.5"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              Sign up
            </button>

            <p className="text-sm font-light text-gray-400 text-center">
              Already have an account?{" "}
              <Link to="/Dashboard" className="font-medium text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
