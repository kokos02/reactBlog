import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        inputs,
        { withCredentials: true },
        { credentials: "include" },
        { path: "/" }
      );
      setCurrentUser(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const logout = async (inputs) => {
    await axios.post(
      "http://localhost:8800/api/auth/logout",
      { withCredentials: true },
      { credentials: "include" },
      { path: "/" }
    );
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};
