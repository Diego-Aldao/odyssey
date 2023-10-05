import React, { useState } from "react";

type Props = {
  children: JSX.Element;
};

type ContextType = {
  darkMode: boolean;
  toggleDarkMode?: () => void;
};

const defaultState = {
  darkMode: false,
};

const DarkModeContext = React.createContext<ContextType>(defaultState);

export const DarkModeContextProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(defaultState.darkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
