import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import UserHome from "./pages/user/Home";
import Profile from "./pages/user/Profile";
import QRScanner from "./pages/user/QRScanner";
import UserLayout from "./layouts/UserLayouts";
import ProtectedRoute from "./components/ProtectedRoute"; // Ensure this import exists
import Signup from "./pages/user/Signup"; // Added import

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> {/* Added route */}

            {/* Protected Dashboard Route */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            /* User Routes with Layout */
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <UserLayout />
                </ProtectedRoute>
              }
            >
              <Route path="home" element={<UserHome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="scanner" element={<QRScanner />} />
            </Route>

            {/* Redirect Root to Login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;