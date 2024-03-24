import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import UserPool from "../utils/UserPool";

import "./RegisterPage.css";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    UserPool.signUp(data.correo, data.contraseña, [], null, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result);
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
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

      <label htmlFor="apellido">Apellido</label>
      <input
        type="text"
        id="apellido"
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

      <label htmlFor="correo">Correo</label>
      <input
        type="email"
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

      <label htmlFor="fecha de nacimiento">Fecha de nacimiento</label>
      <input
        type="date"
        id="fecha de nacimiento"
        name="fecha de nacimiento"
        {...register("fechaNacimiento", {
          required: {
            value: true,
            message: "La fecha de nacimiento es obligatoria",
          },
          validate: (value) => {
            const date = new Date(value);
            const currentDate = new Date();
            const age = currentDate.getFullYear() - date.getFullYear();
            if (age >= 5 && age <= 110) {
              return true;
            } else {
              return "La edad debe de ser entre 5 y 110 años para registrarte";
            }
          },
        })}
      />

      {errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>}

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

      <label htmlFor="terminos">Acepto los terminos y condiciones</label>
      <input
        type="checkbox"
        id="terminos"
        name="terminos"
        {...register("terminos", {
          required: {
            value: true,
            message: "Debes aceptar los terminos y condiciones",
          },
        })}
      />
      {errors.terminos && <span>{errors.terminos.message}</span>}

      <button type="submit">Registrarse</button>

      <Link to="/login">Ya tengo cuenta</Link>

      {/* <pre>
                {JSON.stringify(watch(), null, 2)}
            </pre> */}
    </form>
  );
}
