import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import MemberDashboard from "./pages/memberDashboard.jsx";
import AdminDashboard from "./pages/adminDashboard.jsx";
import ProtectedRoute from "./routes/ProtectedRoutes.jsx";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },

  {
    path: "/member/dashboard",
    element: (
      <ProtectedRoute allowedRole="member">
        <MemberDashboard />
      </ProtectedRoute>
    ),
  },

  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute allowedRole="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
