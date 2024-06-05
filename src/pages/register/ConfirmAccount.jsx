import React, { useContext } from "react";
import { AccountContext } from "../../context/Account";
import { Button, Stack, Typography } from "@mui/material";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

const ConfirmAccount = () => {
  const { confirmUser, resendConfirmationCode, userToConfirm } = useContext(AccountContext);

  const onSubmit = (data) => {
    confirmUser(userToConfirm, data.code);
  };

  return (
    <FormContainer onSuccess={(e) => onSubmit(e)}>
      <Stack spacing={2}>
        <Typography variant="h5" sx={{ color: "#ffffff" }}>
          Confirm Account
        </Typography>
        <Typography variant="body1" sx={{ color: "#ffffff" }}>
          Please confirm your account by entering the code we sent to your email.
        </Typography>
        <TextFieldElement
          name="code"
          label="Code"
          InputProps={{
            sx: { color: "#ffffff" }, // Texto blanco
          }}
          InputLabelProps={{
            sx: { color: "#f5f5f5" }, // Etiqueta gris claro
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ bgcolor: '#ffffff', color: '#000000', '&:hover': { bgcolor: '#f5f5f5' } }} // Fondo blanco, texto negro, hover gris claro
        >
          Confirm Account
        </Button>
        <Button
          variant="contained"
          onClick={() => resendConfirmationCode(userToConfirm)}
          sx={{ bgcolor: '#ffffff', color: '#000000', '&:hover': { bgcolor: '#f5f5f5' } }} // Fondo blanco, texto negro, hover gris claro
        >
          Resent Code
        </Button>
      </Stack>
    </FormContainer>
  );
};

export default ConfirmAccount;
