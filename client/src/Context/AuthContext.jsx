import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [Auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("UserTrack")) || null
  );
  const isAuth = localStorage.getItem("UserTrack") ? true : false;
  return (
    <AuthContext.Provider value={{ Auth, setAuth, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
