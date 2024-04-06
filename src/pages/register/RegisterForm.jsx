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
  TextField,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
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
  const {
    signUp
  } = useContext(AccountContext)

  const onSubmit = (data) => {
    signUp(data)  
  };

  return (
    <FormContainer onSuccess={(e) => onSubmit(e)}>
      <Stack spacing={2}>
        {/* <TextFieldElement name={"name"} label={"Name"} required /> */}

        <TextFieldElement
          name={"email"}
          label={"Email"}
          required
          type={"email"}
        />
        <PasswordElement label={"Password"} required name={"password"} />

        <PasswordRepeatElement
          passwordFieldName={"password"}
          name={"password-repeat"}
          label={"Repeat Password"}
          required
        />
        <CheckboxElement name={"agree"} label={"Agree"} required />

        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </Stack>
    </FormContainer>
  );
}
