import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";

const LoginPage = () => {
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "eyis619@gmail.com",
    password: "12345",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log("GoogleSignIn");
    dispatch(startGoogleSignIn());
    
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="eyis619@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create Account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
