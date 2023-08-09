// Store authentication data checkbox input
import { TEXT } from "../util/DataStorage";
import { useFormContext } from "../../context/FormContext";
import "./RememberMe.css";
import "../CustomFonts.css";

export default function RememberMe() {
  // CONTEXT
  const {rememberCredentials, setRememberCredentials} = useFormContext();

  // ELEMENTS
  return (
    <div className="authentication-remember-me">
      <input 
        className="input-checkbox"
        type="checkbox" 
        checked={rememberCredentials}
        value={rememberCredentials}
        onChange={() => setRememberCredentials(prevValue => !prevValue)}
      /> <span className="header-5"> {TEXT.REMEMBER_ME} </span>  
    </div>
  )
}