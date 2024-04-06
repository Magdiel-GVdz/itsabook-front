import React, { createContext, useEffect, useState } from "react";

const SelectedBookContext = createContext();

const SelectedBookProvider = ({ children }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleClose();
  }, [selectedBook]);

  return (
    <SelectedBookContext.Provider
      value={{ selectedBook, setSelectedBook, handleClose, handleOpen, open }}
    >
      {children}
    </SelectedBookContext.Provider>
  );
};

export { SelectedBookProvider, SelectedBookContext };
