import React, { createContext, useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { GlobalContextType } from "../types";

const globalContext = createContext<GlobalContextType | null>(null);

const GlobalContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [mode, setMode] = useLocalStorage<"light" | "dark">("mode", "light");
  const [language, setLanguage] = useLocalStorage<string>("language", "en");
  const [authenticated, setAuthenticated] = useLocalStorage<boolean>(
    "authenticated",
    false
  );

  return (
    <globalContext.Provider
      value={{
        mode,
        setMode,
        language,
        setLanguage,
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

const useGlobalContext = (): GlobalContextType => {
  const context = useContext(globalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};

export { GlobalContextProvider, useGlobalContext };
