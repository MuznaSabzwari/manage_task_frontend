import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" shadow-sm  dark:bg-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 <Link to="/" className="hover:underline">TaskManagerPro</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="https://aykays.com/services/design-and-development/" className="hover:underline me-4 md:me-6">About Us</Link>
          </li>
        
          <li>
            <Link to="https://aykays.com/services/design-and-development/" className="hover:underline me-4 md:me-6">Terms of Use</Link>
          </li>
          <li>
            <Link to="https://aykays.com/services/design-and-development/" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
