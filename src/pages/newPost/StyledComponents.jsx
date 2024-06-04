import { Box, Modal, styled } from "@mui/material";

// Estilo para el modal
export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Estilo para el contenido del modal
export const StyledModalContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Alinea el contenido al principio del modal */
  width: 90%; /* Ajusta el ancho para que sea más grande */
  max-width: 600px;
  height: 70vh; /* Reducimos la altura para dejar espacio para el botón de cierre */
  background-color: white;
  border: 2px solid black;
  padding: 20px;
  overflow-y: auto; /* Habilita el scroll vertical */
`;
