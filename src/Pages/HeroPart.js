import React from "react";
import { Link } from "react-router-dom";
import heroPic from "../Assets/heroPic.webp";
import About from "./About";
import Header from "../Component/Header.js";


export default function HeroPart() {
  return (
    <>
      <Header />

      <section className="bg-white dark:bg-black">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          {/* Text Content */}
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Manange Your Task With Our Website
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Empower your business with modern web solutions designed for speed
              and scalability. Build faster, smarter, and more efficiently using
              our powerful tools tailored for growing teams and startups.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={heroPic} alt="mockup" />
          </div>
        </div>
      </section>
      <About />
    </>
  );
}
