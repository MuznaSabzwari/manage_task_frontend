import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.webp";
import Header from "../Component/Header.js";
import Footer from "../Component/Footer.js";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3005/Register/login", {
        Email: email,
        Password: password,
      });

      // Save userId in cookie
      Cookies.set("userId", res.data.user._id, { expires: 1 });

      //  Navigate to dynamic dashboard route
      navigate(`/Dashboard/${res.data.user._id}`);
    } catch (err) {
      setError("Invalid email or password");
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <section className="bg-gray-50 dark:bg-black min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md rounded-lg shadow dark:border bg-gray-900 opacity-85 hover:opacity-100 dark:border-gray-700 p-6">
          <div className="flex items-center justify-center mb-6 space-x-2">
            <img className="size-12 rounded-full" src={logo} alt="logo" />
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">
              Taskco
            </span>
          </div>

          <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white mb-4">
            Sign in to your account
          </h1>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full px-5 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Sign in
            </button>

            <p className="text-sm text-gray-400">
              Don’t have an account yet?{" "}
              <Link to="/Signup" className="text-blue-400 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
