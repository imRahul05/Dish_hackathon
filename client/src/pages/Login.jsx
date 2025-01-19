import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { auth, signInWithEmailAndPassword } from "../firebase/firebase";
import "react-toastify/dist/ReactToastify.css";
import LoginHeader from "../components/Login/LoginHeader";
import UserToggle from "../components/Login/UserToggle";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login attempt:", { email, isAdmin });

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (isAdmin) {
        navigate("/dashboard");
      } else {
        navigate("/user/home");
      }
      toast.success("Logged in successfully");
    } catch (error) {
      console.error("Login failed", error);
      toast.error("Login failed. Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign In");
    // Implement Google Sign In
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <ToastContainer />
      <div className="w-full max-w-md p-8 glass-morphism rounded-2xl animate-fadeIn">
        <LoginHeader />
        <UserToggle isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <LoginForm
          handleSubmit={handleSubmit}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLoading={isLoading}
          isAdmin={isAdmin}
          handleGoogleSignIn={handleGoogleSignIn}
        />
      </div>
    </div>
  );
};

export default Login;