import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { signupFormCode } from "../../constants/Code";

const SignupForm = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(signupFormCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="bg-gray-900 min-h-screen items-center py-10">
      <h1 className="text-5xl font-extrabold mb-8 text-cyan-300 neon-text flex justify-center items-center">
  Signup Form
</h1>

      <div className="mb-8">
        <form className="max-w-md mx-auto bg-gradient-to-br from-purple-900 to-gray-800 shadow-neon rounded-lg px-8 pt-6 pb-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-pink-300 neon-text">
            Signup
          </h2>
          <div className="mb-4">
            <label className="block text-cyan-300 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              className="bg-gray-800 text-pink-300 border border-cyan-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-300 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="bg-gray-800 text-pink-300 border border-cyan-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-300 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="bg-gray-800 text-pink-300 border border-cyan-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-300 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              className="bg-gray-800 text-pink-300 border border-cyan-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-cyan-300 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              className="bg-gray-800 text-pink-300 border border-cyan-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-pink-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-full shadow-lg neon-glow transition duration-300 transform hover:scale-105"
              type="submit"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
      <h2 className="text-3xl font-bold text-cyan-300 neon-text flex justify-center items-center">Code:</h2>
      <div className="min-h-screen flex justify-center items-center">
  <div className="relative bg-gray-800 rounded-lg p-4 max-w-4xl w-full shadow-neon flex justify-center items-center">
    {/* Scrollable Code Section */}
    <div className="overflow-auto max-h-64 rounded-lg border border-pink-300">
      <SyntaxHighlighter language="jsx" style={atomOneDark}>
        {signupFormCode}
      </SyntaxHighlighter>
    </div>
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-pink-500 hover:to-cyan-500 shadow-neon transition duration-300"
    >
      {copySuccess ? "Copied!" : "Copy Code"}
    </button>
  </div>
</div>

    </div>
  );
};

export default SignupForm;
