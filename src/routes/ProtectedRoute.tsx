import React from "react";
import { useAppSelector } from "../redux/app/hooks";
import { selectCurrentUser } from "../redux/features/auth.slice";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: React.FC<any> = ({ children }) => {
  const user = useAppSelector((state) => selectCurrentUser(state));
  return user ? children : <Navigate to="/login" />;
};
