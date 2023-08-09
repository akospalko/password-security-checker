// Page layout
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import PasswordInfoModal from "./components/PasswordInfoModal";
import PasswordInfoButton from "./components/PasswordInfoButton";
import { useModalContext } from "../context/ModalContext";
import "./App.css";

function App() {
  // CONTEXT
  const {isModalToggled} = useModalContext();
  return (
    <div className="page-layout">
      {/* Password information modal button */}
      <PasswordInfoButton/>      
      {/* Signup container */}
      <Signup/>
      {/* Login container */}
      <Login/>
      {/* Password rules information modal */}
      {isModalToggled && <PasswordInfoModal/>}
    </div>
  )
}

export default App