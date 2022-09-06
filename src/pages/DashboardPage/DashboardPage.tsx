import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../redux/app/hooks";
import { useLogoutUserMutation } from "../../redux/apis/auth.api";
import { clearAuthState } from "../../redux/features/auth.slice";

export const DashboardPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [logoutUser] = useLogoutUserMutation();
  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(clearAuthState());
      navigate("/login");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <div>Dashboard</div>
      <div>
        <Link to="/login">login</Link>
      </div>
      <div>
        <Link to="/signup">sign up</Link>
      </div>
      <div>
        <Link to="/reset">reset password</Link>
      </div>
      <div>
        <Link to="/change">change password</Link>
      </div>
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};
