import { Box, Button, Grid, Stack, Typography } from "@mui/material";
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
      style={{ minHeight: "100vh", overflow: "hidden", margin: 0, padding: 0 }}
    >
      <Grid item xs={12} sm={6} md={4}>
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
              name={"password"}
              label={"Password"}
              control={control}
              required
            />
            <Button startIcon={<LoginIcon />} variant={"contained"} type={"submit"} disabled={isLoading}>
            {isLoading ? "Loading" : "Submit"}
            </Button>
            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
          </Stack>
          <Link to="/register">
            <Typography variant={"body1"} component={"span"}>
              Don't have an account? Sign up here.{" "}
            </Typography>
          </Link>
        </FormContainer>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
