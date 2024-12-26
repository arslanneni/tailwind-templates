import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SignupForm from "./components/SignupForm";
import TailwindInstallation from "./components/TailwindInstallation";
import Login from "./components/Login";
import LoginBen10 from "./components/LoginBen10Form";
import SanAndreasLogin from "./components/LoginFormSanAndreas";
import BatmanSignup from "./components/SignUpFormBatman";


const App = () => {
  return (
    <Fragment>
      <Router>
        <div className="flex h-screen bg-gray-900">
          {/* Sidebar for Navigation */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 p-5 overflow-y-auto bg-gradient-to-r from-purple-900 via-pink-800 to-cyan-900">
            <div className="container mx-auto p-6">
              <Routes>
                {/* Home Page */}
                <Route path="/" element={<TailwindInstallation />} />

                {/* Signup Form Page */}
                <Route path="/signup" element={<SignupForm />} />

                {/* Login Form Page */}
                <Route path="/login" element={<Login />} />

                <Route path="/loginBen10" element={<LoginBen10 />} />

                <Route path="/loginSanAndreas" element={<SanAndreasLogin />} />

                <Route path="/SignupFormBatman" element={<BatmanSignup />} />

              
                {/* Tailwind Installation Guide Page */}
                <Route path="/tailwind-installation" element={<TailwindInstallation />} />

                {/* Additional Routes can be added here */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
