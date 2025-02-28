import { useNavigate } from "react-router-dom";
import { doSignInWithGoogle } from "@/firebase/firebase"; // Added import
import { toast } from "react-toastify";
import { useState } from "react";
import AuthPopup from "./AuthPopup"; // Existing import

const SignInGoogle = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const user = await doSignInWithGoogle();
      if (user) {
        navigate("/dashboard");
      } else {
        setPopupMessage("Account created successfully!");
        setIsPopupOpen(true);
        navigate("/user/home");
      }
    } catch (error) {
      console.error("Google login failed", error);
      toast.error("Google login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupMessage("");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-4 
                   text-gray-700 bg-white border border-gray-300 rounded-md
                   hover:bg-gray-50 focus:outline-none focus:ring-2 
                   focus:ring-offset-2 focus:ring-gray-500"
      >
        {/* Google Icon */}
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        {isLoading ? 'Signing in...' : 'Sign in with Google'}
      </button>
      <AuthPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        message={popupMessage}
      />
    </>
  );
};

export default SignInGoogle;