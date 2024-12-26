import React, { useState } from "react";
import { loginBenTenCode } from "../../constants/Code";

const LoginBen10 = () => {
  const [copySuccess, setCopySuccess] = useState(false);

 

  const handleCopy = () => {
    navigator.clipboard.writeText(loginBenTenCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center py-10 ben10-bg">
      {/* Login Form */}
      <div className="relative bg-black rounded-lg p-6 max-w-lg w-full shadow-neon ben10-form">
        <form className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center ben10-text">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline omnitrix-input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">Password</label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline omnitrix-input"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-neon"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      {/* Code Display Section */}
      <div className="relative bg-black rounded-lg p-6 max-w-4xl w-full mt-8 shadow-neon ben10-code">
        <h2 className="text-2xl font-bold mb-3 text-white text-center">Code:</h2>
        <div className="overflow-auto max-h-64 rounded-lg border border-green-500">
          <pre className="text-green-400">{loginBenTenCode}</pre>
        </div>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-blue-500 hover:to-green-500 shadow-neon transition duration-300"
        >
          {copySuccess ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </div>
  );
};

export default LoginBen10;
