import React from "react";

const LoginHeader = () => {
  return (
    <div className="text-center mb-8">
      <img
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=50&h=50&fit=crop"
        alt="Logo"
        className="w-16 h-16 mx-auto mb-4 rounded-xl"
      />
      <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
      <p className="text-gray-600 mt-2">Sign in to your account</p>
    </div>
  );
};

export default LoginHeader;
