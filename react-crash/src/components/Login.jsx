import React, { useState } from "react";
import { loginCode } from "../../constants/Code";

const Login = () => {
  const [copySuccess, setCopySuccess] = useState(false);



  const handleCopy = () => {
    navigator.clipboard.writeText(loginCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center py-10">
      {/* Login Form */}
      <div className="relative bg-gray-800 rounded-lg p-6 max-w-lg w-full shadow-neon">
        <form className="max-w-md mx-auto bg-gray-800 shadow-lg rounded-lg px-8 pt-6 pb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Login</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-pink-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-neon"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      {/* Code Display Section */}
      <div className="relative bg-gray-800 rounded-lg p-6 max-w-4xl w-full mt-8 shadow-neon">
        <h2 className="text-2xl font-bold mb-3 text-white text-center">Code:</h2>
        <div className="overflow-auto max-h-64 rounded-lg border border-pink-300">
          <pre className="text-white">{loginCode}</pre>
        </div>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-pink-500 hover:to-cyan-500 shadow-neon transition duration-300"
        >
          {copySuccess ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </div>
  );
};

export default Login;
