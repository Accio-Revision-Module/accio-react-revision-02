import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { TodoProvider } from "./contexts/TodoContext";
import { withAuthorization } from "./hocs/withAuthorization";
import { UserProvider } from "./contexts/UserContext";

const ProtectedHome = withAuthorization(Home);

function App() {
  return (
    <>
      <UserProvider>
        <TodoProvider>
          <Navbar />
          <ProtectedHome />
        </TodoProvider>
      </UserProvider>
    </>
  );
}

export default App;
