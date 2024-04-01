import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginForm from "./LoginForm";



const defaultTheme = createTheme();

export default function LoginPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Grid
        container
        sx={{
          height: '100vh',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
        }}
      >
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid
          container
          item
          xs={12}
          sm={8}
          md={5}
          alignItems="center"
          justifyContent="center"
          sx={{ padding: '25px' }}
        >
          <LoginForm />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
