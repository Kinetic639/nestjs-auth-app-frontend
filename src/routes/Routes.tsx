import React from "react";
import { LogInPage } from "../pages/LogInPage/LogInPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { PasswordResetPage } from "../pages/PasswordResetPage/PasswordResetPage";
import { PasswordChangePage } from "../pages/PasswordChangePage/PasswordChangePage";
import { ProtectedRoute } from "./ProtectedRoute";

export const Routes: React.FC = () => {
  return (
    <ReactRouterRoutes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/reset" element={<PasswordResetPage />} />
      <Route path="/change" element={<PasswordChangePage />} />
    </ReactRouterRoutes>
  );
};
