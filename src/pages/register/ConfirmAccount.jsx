import React, { useContext } from "react";
import { AccountContext } from "../../context/Account";
import { Button, Stack, Typography } from "@mui/material";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

const ConfirmAccount = () => {
  const { confirmUser, resendConfirmationCode, userToConfirm } = useContext(AccountContext);

    const onSubmit = (data) => {
        confirmUser(userToConfirm,data.code)
    }

  return (
    <FormContainer onSuccess={(e) => onSubmit(e)}>
      <Stack spacing={2}>
        <Typography variant="h5">Confirm Account</Typography>
        <Typography variant="body1">
          Please confirm your account by entering the code we sent to your email.
        </Typography>
        <TextFieldElement name="code" label="Code" />
        <Button variant="contained" type="submit">
          Confirm Account
        </Button>
        <Button variant="contained" onClick={()=>resendConfirmationCode(userToConfirm)}>
          Resent code
        </Button>
      </Stack>
    </FormContainer>
  );
};

export default ConfirmAccount;
