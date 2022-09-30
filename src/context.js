import React, { createContext, useState } from "react";
import { usePersistedState } from "./hooks";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = usePersistedState(
    false,
    "isAuthenticated"
  );
  const [data, setData] = useState();

  return (
    <userContext.Provider
      value={{
        data,
        isAuthenticated,
        setData,
        createSession: data => {
          setData(data);
          setAuthenticated(true);
        },
        removeSession: () => {
          setData(undefined);
          setAuthenticated(false);
        }
      }}
    >
      {children}
    </userContext.Provider>
  );
};
