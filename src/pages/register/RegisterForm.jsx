import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { parseISO, differenceInYears } from "date-fns";

import UserPool from "../../utils/UserPool";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Grid,
  TextField,
  Container,
  Avatar,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { CheckBox, LockOutlined } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers";
import { useContext, useState } from "react";
import {
  CheckboxElement,
  FormContainer,
  PasswordElement,
  PasswordRepeatElement,
  TextFieldElement,
} from "react-hook-form-mui";
import { AccountContext } from "../../context/Account";


export default function RegisterForm() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   watch,
  // } = useForm();
  // const [selectedDate, setSelectedDate] = useState(null); 


  const { signUp, errorMessage } = useContext(AccountContext);

  const onSubmit = async (data) => {
    await signUp(data);
  };

  return (
         <Container component={"main"} maxWidth="md">

        <FormContainer
          onSuccess={(e) => onSubmit(e)}
          onError={(e) => console.log("error", e)}
        >
          <CssBaseline />

          <Box
            sx={{
              marginTop: 30,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar alignItems="center" sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlined />
              </Avatar>
            <h2 fontWeight="bold">Sign in</h2>
            <Stack spacing={1}>
              {/* <TextFieldElement name={"name"} label={"Name"} required /> */}

              

              
              <Box component="form" sx={{ mt: 1 }}>
                <Grid container spacing={3} >
                  <Grid item xs={16}>
                    <TextFieldElement
                      autoComplete="Given email address"
                      fullWidth="true"
                      name={"email"}
                      label={"Email"}
                      required
                      type={"email"}
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12} >
                    <PasswordElement
                      required
                      fullWidth="true"
                      type="password"
                      autoComplete="current-password"
                      label={"Password"}
                      name={"password"}
                    // validate={(value) => {
                    //   const passwordRegex =
                    //     /^(?=.*[a-záéíóúüñ])(?=.*[A-ZÁÉÍÓÚÜÑ])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
                    //   return (
                    //     passwordRegex.test(value) ||
                    //     "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo especial: !@#$%^&*"
                    //   );
                    // }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <PasswordRepeatElement
                      passwordFieldName={"password"}
                      name={"password-repeat"}
                      label={"Repeat Password"}
                      required
                      fullWidth={true}
                      type="password"
                      validate
                    />
                  </Grid>

                  <CheckboxElement name={"agree"} label={"Agree"} required />

                  <Button variant="contained" type="submit" fullWidth={true}>
                    Sign Up
                  </Button>

                  {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
                </Grid>
              </Box>
            </Stack>
          </Box>
        </FormContainer>
      </Container>
  
  );
}
