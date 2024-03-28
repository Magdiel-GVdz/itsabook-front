import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { parseISO, differenceInYears } from 'date-fns';

import UserPool from "../../utils/UserPool";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [selectedDate, setSelectedDate] = useState(null); // Estado local para la fecha seleccionada
  


  const onSubmit = handleSubmit((data) => {
    UserPool.signUp(data.correo, data.contraseña, [], null, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result);
    });
  });

  const validateDateOfBirth = (value) => {
    const dateOfBirth = parseISO(value); // Asegúrate de que el formato sea válido
    const currentDate = new Date();
    const age = differenceInYears(currentDate, dateOfBirth);
  
    if (age >= 5 && age <= 110) {
      return true;
    } else {
      return "La edad debe estar entre 5 y 110 años para registrarte";
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <FormGroup onSubmit={onSubmit}>
          <TextField
            required
            id="nombre"
            label="Nombre"
            variant="outlined"
            name="nombre"
            {...register("nombre", {
              required: {
                value: true,
                message: "El nombre es obligatorio",
              },
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El nombre debe tener como maximo 20 caracteres",
              },
              pattern: {
                value: /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/,
                message: "El nombre solo puede contener letras del español",
              },
            })}
          />
          {errors.nombre && <span>{errors.nombre.message}</span>}

          <TextField
            required
            id="apellido"
            label="Apellido"
            variant="outlined"
            name="apellido"
            {...register("apellido", {
              required: {
                value: true,
                message: "El apellido es obligatorio",
              },
              minLength: {
                value: 3,
                message: "El apellido debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El apellido debe tener como maximo 20 caracteres",
              },
              pattern: {
                value: /^^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/,
                message: "El apellido solo puede contener letras del español",
              },
            })}
          />
          {errors.apellido && <span>{errors.apellido.message}</span>}

          <TextField
            required
            label="Correo"
            variant="outlined"
            id="correo"
            name="correo"
            {...register("correo", {
              required: {
                value: true,
                message: "El correo es obligatorio",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ._%+-]+@[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ.-]+\.[a-zA-Z]{2,}$/,
                message: "El correo no es valido",
              },
            })}
          />
          {errors.correo && <span>{errors.correo.message}</span>}

          <DatePicker
            label="Fecha de nacimiento"
            required
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={selectedDate}
            onChange={(newValue) => {
              if (newValue instanceof Date) { // Verifica si newValue es una instancia de Date
                setSelectedDate(newValue); // Establece el nuevo valor del estado
              }
            }}
            {...register("fechaNacimiento", {
              required: {
                value: true,
                message: "La fecha de nacimiento es obligatoria",
              },
              validate: validateDateOfBirth,
            })}
          />
          {errors.fechaNacimiento && (
            <span>{errors.fechaNacimiento.message}</span>
          )}

          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            {...register("contraseña", {
              required: {
                value: true,
                message: "La contraseña es obligatorio",
              },
              validate: (value) => {
                const passwordRegex =
                  /^(?=.*[a-záéíóúüñ])(?=.*[A-ZÁÉÍÓÚÜÑ])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
                return (
                  passwordRegex.test(value) ||
                  "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo especial: !@#$%^&*"
                );
              },
            })}
          />
          {errors.contraseña && <span>{errors.contraseña.message}</span>}

          <label htmlFor="contraseña2">Repetir contraseña</label>
          <input
            type="password"
            id="contraseña2"
            name="contraseña2"
            {...register("contraseña2", {
              required: {
                value: true,
                message: "Repetir la contraseña es obligatorio",
              },
              validate: (value) =>
                value === watch("contraseña") || "Las contraseñas no coinciden",
            })}
          />
          {errors.contraseña2 && <span>{errors.contraseña2.message}</span>}

          <FormControlLabel
            required
            control={
              <Checkbox
                name="terminos"
                {...register("terminos", {
                  required: {
                    value: true,
                    message: "Debes aceptar los terminos y condiciones",
                  },
                })}
              />
            }
            label="Acepto los terminos y condiciones"
          />
          {errors.terminos && <span>{errors.terminos.message}</span>}

          <Button variant="contained" type="submit">
            Registrarse
          </Button>

          <Link to="/login">Ya tengo cuenta</Link>

          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </FormGroup>
      </div>
    </Box>
  );
}
