import {
  Button,
  Stack,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useContext } from "react";
import {
  FormContainer,
  PasswordElement,
  PasswordRepeatElement,
  TextFieldElement,
} from "react-hook-form-mui";
import { AccountContext } from "../../context/Account";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function RegisterForm() {
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
          name={"nickname"}
          label={"Nickname"}
          required
          type="text"
          InputProps={{
            sx: { color: "#ffffff" }, // Texto blanco
          }}
          InputLabelProps={{
            sx: { color: "#f5f5f5" }, // Etiqueta gris claro
          }}
        />

        <TextFieldElement
          name={"email"}
          label={"Email"}
          required
          type={"email"}
          InputProps={{
            sx: { color: "#ffffff" }, // Texto blanco
          }}
          InputLabelProps={{
            sx: { color: "#f5f5f5" }, // Etiqueta gris claro
          }}
        />
        <PasswordElement
          label={"Password"}
          required
          name={"password"}
          InputProps={{
            sx: { color: "#ffffff" }, // Texto blanco
            endAdornment: (
              <IconButton
                sx={{ color: "#ffffff" }} // Icono blanco
                aria-label="toggle password visibility"
                edge="end"
              >
                <VisibilityIcon />
              </IconButton>
            ),
          }}
          InputLabelProps={{
            sx: { color: "#f5f5f5" }, // Etiqueta gris claro
          }}
        />

        <PasswordRepeatElement
          passwordFieldName={"password"}
          name={"password-repeat"}
          label={"Repeat Password"}
          required
          validate
          InputProps={{
            sx: { color: "#ffffff" }, // Texto blanco
            endAdornment: (
              <IconButton
                sx={{ color: "#ffffff" }} // Icono blanco
                aria-label="toggle password visibility"
                edge="end"
              >
                <VisibilityIcon />
              </IconButton>
            ),
          }}
          InputLabelProps={{
            sx: { color: "#f5f5f5" }, // Etiqueta gris claro
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="agree"
              required
              sx={{
                color: "#ffffff",
                '&.Mui-checked': {
                  color: "#ffffff",
                },
              }}
            />
          }
          label="Agree"
          sx={{ color: "#ffffff" }} // Texto blanco
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ bgcolor: '#ffffff', color: '#000000', '&:hover': { bgcolor: '#f5f5f5' } }} // Fondo blanco, texto negro, hover gris claro
        >
          Sign Up
        </Button>
        {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
      </Stack>
    </FormContainer>
  );
}
