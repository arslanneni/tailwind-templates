import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/solid"; // Importing additional icons

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false); // Toggle for entire sidebar
  const [showLogin, setShowLogin] = useState(false); // Toggle for login links
  const [showSignup, setShowSignup] = useState(false); // Toggle for signup links

  const loginLinks = [
    { name: "Login Form Cyber Punk", path: "/login" },
    { name: "Login Form Ben 10", path: "/loginBen10" },
    { name: "Login Form San Andreas", path: "/loginSanAndreas" },
  ];

  const signupLinks = [
    { name: "Signup Form Cyber Punk", path: "/signup" },
    { name: "Sign Up Form Batman", path: "/SignupFormBatman" },
  ];

  const toggleLogin = () => setShowLogin((prev) => !prev);
  const toggleSignup = () => setShowSignup((prev) => !prev);

  const toggleSidebar = () => setShowSidebar((prev) => !prev); // Toggle sidebar for mobile

  return (
    <div>
      {/* Hamburger menu button for mobile */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-cyan-300 p-3 rounded-md shadow-md"
      >
        {showSidebar ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {/* Sidebar container */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-br from-gray-900 to-black text-cyan-300 shadow-neon transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-64 transition-transform duration-300 ease-in-out z-40`}
      >
        <h1 className="text-3xl font-extrabold p-6 neon-text">Tailwind Components</h1>

        {/* Login Forms Section */}
        <div className="px-4">
          <button
            onClick={toggleLogin}
            className="text-white font-semibold text-lg w-full text-left py-3 border-b border-gray-700 hover:bg-gray-700 flex justify-between items-center transition duration-300"
          >
            Login Forms
            {showLogin ? (
              <ChevronUpIcon className="h-6 w-6 text-cyan-300" />
            ) : (
              <ChevronDownIcon className="h-6 w-6 text-cyan-300" />
            )}
          </button>
          {showLogin && (
            <ul className="space-y-2 pl-4 pt-2 transition-all duration-300 ease-in-out">
              {loginLinks.map((link) => (
                <li key={link.path} className="px-2">
                  <Link
                    to={link.path}
                    className="flex items-center px-4 py-3 bg-gray-800 rounded-lg border border-cyan-300 text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 hover:text-white shadow-lg transform hover:translate-x-1 transition-all duration-300"
                  >
                    <span className="flex-grow">{link.name}</span>
                    <ChevronRightIcon className="h-5 w-5 text-cyan-300" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Signup Forms Section */}
        <div className="px-4 mt-8">
          <button
            onClick={toggleSignup}
            className="text-white font-semibold text-lg w-full text-left py-3 border-b border-gray-700 hover:bg-gray-700 flex justify-between items-center transition duration-300"
          >
            Signup Forms
            {showSignup ? (
              <ChevronUpIcon className="h-6 w-6 text-cyan-300" />
            ) : (
              <ChevronDownIcon className="h-6 w-6 text-cyan-300" />
            )}
          </button>
          {showSignup && (
            <ul className="space-y-2 pl-4 pt-2 transition-all duration-300 ease-in-out">
              {signupLinks.map((link) => (
                <li key={link.path} className="px-2">
                  <Link
                    to={link.path}
                    className="flex items-center px-4 py-3 bg-gray-800 rounded-lg border border-cyan-300 text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 hover:text-white shadow-lg transform hover:translate-x-1 transition-all duration-300"
                  >
                    <span className="flex-grow">{link.name}</span>
                    <ChevronRightIcon className="h-5 w-5 text-cyan-300" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Overlay for mobile */}
      {showSidebar && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
