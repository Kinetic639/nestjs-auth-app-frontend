import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes } from "./routes/Routes";
import { useValidateUserMutation } from "./redux/apis/auth.api";
import { useAppDispatch } from "./redux/app/hooks";
import { useNavigate } from "react-router-dom";
import { setAuthState } from "./redux/features/auth.slice";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [validate] = useValidateUserMutation();
  useEffect(() => {
    (async () => {
      try {
        const response = await validate().unwrap();
        dispatch(setAuthState({ user: response }));
        navigate("/");
      } catch (e) {}
    })();
  }, []);
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Routes />
      </div>
    </>
  );
};

export default App;
