import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupHeader from "@/components/Signup/SignupHeader";
import SignupForm from "@/components/Signup/SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <ToastContainer />
      <div className="w-full max-w-md p-8 glass-morphism rounded-2xl animate-fadeIn">
        <SignupHeader />
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
