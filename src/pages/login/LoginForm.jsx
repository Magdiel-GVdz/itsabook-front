import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AccountContext } from "../../context/Account";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  PasswordElement,
  TextFieldElement,
} from "react-hook-form-mui";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Itsabook
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function LoginForm() {
  const { authenticate, setUserLoggedIn } = useContext(AccountContext);

  const { handleSubmit, control, watch } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = handleSubmit((e) => {
    setIsLoading(true);
    authenticate(e.email, e.password)
      .then((data) => {
        setIsLoading(false);
        setUserLoggedIn(true);
        console.log("Logged in!", data);
      })
      .catch((err) => {
        console.log("Ops!", err);
        setIsLoading(false);
      });
  });

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      <Grid item xs={12} textAlign="center">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <link rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Allura&display=swap" />
          <Typography variant="h1" component="h1" gutterBottom 
          style={{fontSize:'120px', fontFamily: 'Allura, cursive'}}>
            It's a book!
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FormContainer onSuccess={onSubmit} onError={console.log("error")}>
          <Stack spacing={2}>
            <TextFieldElement
              name={"email"}
              label={"Email"}
              type={"email"}
              control={control}
              required
              fullWidth
            />
            <PasswordElement
              fullWidth
              name={"password"}
              label={"Password"}
              control={control}
              required
            />
            <Button
              sx={{ mt: 3, mb: 2 }}
              fullWidth
              startIcon={<LoginIcon />}
              variant={"contained"}
              type={"submit"}
              disabled={isLoading}
            >
              {isLoading ? "Loading" : "Submit"}
            </Button>
            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
          </Stack>

          <Grid container>
            <Grid item xs>
              <Link to="#">
                <Typography variant="body2">{"Forgot password? "}</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register">
                <Typography variant="body2">
                  {"Don't have an account? Sign Up"}
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </FormContainer>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
