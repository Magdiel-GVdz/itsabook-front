import React, { createContext, useState } from "react";

const SelectedBookContext = createContext();

const SelectedBookProvider = ({ children }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <SelectedBookContext.Provider value={{ selectedBook, setSelectedBook }}>
      {children}
    </SelectedBookContext.Provider>
  );
};

export { SelectedBookProvider, SelectedBookContext };
