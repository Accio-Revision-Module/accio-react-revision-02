import { useContext } from "react";
import UserContext from "../contexts/UserContext";

/* eslint-disable react/prop-types */
function Login() {
  const { login } = useContext(UserContext);
  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
