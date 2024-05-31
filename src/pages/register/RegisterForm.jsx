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
    <FormContainer
      onSuccess={(e) => onSubmit(e)}
      onError={(e) => console.log("error", e)}
    >
      
      <Stack spacing={2}>
        
        <TextFieldElement
        name= {"nickname"}
        label={"Nickname"}
        required
        type="text"
        />

       
        <TextFieldElement
          name={"email"}
          label={"Email"}
          required
          type={"email"}
        />
        <PasswordElement
          label={"Password"}
          required
          name={"password"}
        />

        <PasswordRepeatElement
          passwordFieldName={"password"}
          name={"password-repeat"}
          label={"Repeat Password"}
          required
          validate
        />
        <CheckboxElement name={"agree"} label={"Agree"} required />

        <Button variant="contained" type="submit">
          Sign Up
        </Button>
        {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
      </Stack>
    </FormContainer>
  );
}