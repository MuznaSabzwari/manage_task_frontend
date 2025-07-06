import React from "react";
import { Link } from "react-router-dom";
import aboutPic from "../Assets/aboutPic.webp";
import Footer from "../Component/Footer";


export default function About() {
  return (
    <>
    <section className="bg-white dark:bg-black">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* Image */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={aboutPic} alt="mockup" />
        </div>
        {/* Text Content */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Our task management system is built to streamline your daily
            operations, whether you're managing a team or handling personal
            projects. With intuitive features like task assignments, due dates,
            progress tracking, and smart notifications, staying on top of your
            work has never been easier. It’s a centralized hub where
            productivity meets clarity. <br></br>
            <br></br>Designed for teams of all sizes, our platform adapts to
            your workflow and helps eliminate chaos from your schedule. From
            startups to growing businesses, we provide the tools you need to
            plan, prioritize, and execute tasks efficiently — all in one
            seamless, user-friendly interface.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center">
            <Link
              to="https://aykays.com/services/design-and-development/"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              More
            </Link>
          </div>
        </div>
      </div>
    </section>
      <Footer />
</>
  );
}
