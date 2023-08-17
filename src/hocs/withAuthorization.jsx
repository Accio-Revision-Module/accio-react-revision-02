/* eslint-disable react/display-name */
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Login from "../pages/Login";

export const withAuthorization = (WrappedComponent) => {
  return (props) => {
    const { user } = useContext(UserContext);
    if (user?.isLoggedIn) {
      return <WrappedComponent {...props} />;
    } else {
      return <Login />;
    }
  };
};
