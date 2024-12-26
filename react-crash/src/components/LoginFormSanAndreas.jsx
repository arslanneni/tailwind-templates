import React, { useState } from "react";
import { loginSanAndreasCode } from "../../constants/Code";

const SanAndreasLogin = () => {
  const [copySuccess, setCopySuccess] = useState(false);



  const handleCopy = () => {
    navigator.clipboard.writeText(loginSanAndreasCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center py-10">
      {/* Login Form */}
      <form className="max-w-md mx-auto bg-gray-900 shadow-lg rounded-lg px-8 pt-6 pb-8 border-2 border-yellow-500 mb-10">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-green-500 neon-text">Login</h2>
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
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>

      {/* Code Display Section */}
      <div className="relative bg-gray-800 rounded-lg p-6 max-w-4xl w-full shadow-lg flex justify-center items-center border-4 border-yellow-500 mb-10">
        <div className="overflow-auto max-h-64 rounded-lg border border-yellow-500 mb-4">
          <pre className="text-white">{loginSanAndreasCode}</pre>
        </div>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-blue-500 hover:to-green-400 shadow-lg transition duration-300"
        >
          {copySuccess ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </div>
  );
};

export default SanAndreasLogin;
