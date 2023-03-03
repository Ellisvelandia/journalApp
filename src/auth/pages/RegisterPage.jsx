import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import React from "react";
import AuthLayout from "../layout/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="CreateAcount">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="name"
              fullWidth
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="eyis619@gmail.com"
              fullWidth
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Create Account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿already have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              log on
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
