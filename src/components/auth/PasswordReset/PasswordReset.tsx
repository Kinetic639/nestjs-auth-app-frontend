import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { useLoginUserMutation } from "../../../redux/apis/auth.api";
import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Tutorial Notes
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

interface FormFields {
  email: string;
}

export const PasswordReset: React.FC = () => {
  const [error, setError] = useState<string[]>([]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: FormFields, actions) => {
      setError([]);
      console.log(values);

      //@TODO logic for resetting password request
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset password
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={0} sx={{ boxSizing: "border-box" }}>
              <Grid item xs={12} sx={{ padding: "10px 0" }}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  // backgroundColor: "#ffb1b1",
                  color: "red",
                  padding: "0 10px",
                }}
              >
                {error.map((err, index) => (
                  <Typography
                    key={index}
                    component="p"
                    variant="body1"
                    sx={{
                      padding: "5px 10px",
                    }}
                  >
                    {err}
                  </Typography>
                ))}
              </Grid>

              <Grid item xs={12} sx={{ padding: "10px 0", margin: "15px 0" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  // sx={{ mt: 3, mb: 2 }}
                >
                  Reset password
                </Button>
              </Grid>
              <Grid item xs>
                <Link component={RouterLink} to="/login" variant="body2">
                  {"Remember password?"}
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
