import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon } from "@heroicons/react/solid"; // Correct import

const Sidebar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

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

  return (
    <div className="w-64 bg-gradient-to-br from-gray-900 to-black text-cyan-300 h-full shadow-neon">
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
  );
};

export default Sidebar;
