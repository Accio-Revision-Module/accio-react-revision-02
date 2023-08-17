import { useContext } from "react";
import UserContext from "../contexts/UserContext";

/* eslint-disable react/prop-types */
function Navbar() {
  const { logout } = useContext(UserContext);

  return (
    <nav>
      <div className="brand">TodoList.</div>
      <div className="user" onClick={logout}>
        Logout
      </div>
    </nav>
  );
}

export default Navbar;
