/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: getLoginState(),
  });

  const storeInLocalStorage = (isLoggedIn) => {
    localStorage.setItem("loggedIn", isLoggedIn);
  };

  function getLoginState() {
    return JSON.parse(localStorage.getItem("loggedIn"));
  }

  const logout = () => {
    setUser((prev) => ({
      ...prev,
      isLoggedIn: false,
    }));
    storeInLocalStorage(false);
  };

  const login = () => {
    setUser((prev) => ({
      ...prev,
      isLoggedIn: true,
    }));
    storeInLocalStorage(true);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
