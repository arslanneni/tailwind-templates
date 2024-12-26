import React, { useState } from "react";
import { signupFormBatmanCode } from "../../constants/Code";

const BatmanSignup = () => {
  const [copySuccess, setCopySuccess] = useState(false);



  const handleCopy = () => {
    navigator.clipboard.writeText(signupFormBatmanCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="bg-black min-h-screen justify-center items-center py-10">
      {/* Signup Form */}
      <form className="max-w-md mx-auto bg-black shadow-lg rounded-lg px-8 pt-6 pb-8 border-2 border-yellow-500 mb-10">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-yellow-500 neon-text">Signup</h2>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Username</label>
          <input
            className="shadow-lg appearance-none border-2 border-yellow-500 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Email</label>
          <input
            className="shadow-lg appearance-none border-2 border-yellow-500 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Password</label>
          <input
            className="shadow-lg appearance-none border-2 border-yellow-500 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Confirm Password</label>
          <input
            className="shadow-lg appearance-none border-2 border-yellow-500 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="password"
            placeholder="Confirm your password"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-yellow-500 to-gray-800 hover:from-gray-800 hover:to-yellow-500 text-black font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            type="submit"
          >
            Signup
          </button>
        </div>
      </form>

      {/* Code Display Section */}
      <div className="flex justify-center items-center min-h-screen">
      <div className="relative bg-gray-800 rounded-lg p-6 max-w-4xl w-full shadow-lg flex justify-center items-center border-4 border-yellow-500">
        <div className="overflow-auto max-h-64 rounded-lg border border-yellow-500 mb-4">
          <pre className="text-white">{signupFormBatmanCode}</pre>
        </div>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-gray-800 text-black px-4 py-2 rounded-lg hover:from-gray-800 hover:to-yellow-500 shadow-lg transition duration-300"
        >
          {copySuccess ? "Copied!" : "Copy Code"}
        </button>
      </div>
      </div>
  
    </div>
  );
};

export default BatmanSignup;
