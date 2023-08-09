// Form status: display status message with custom font color
import { useFormContext } from "../../context/FormContext";
import "./FormStatus.css";

export default function Status() {
  // CONTEXT
  const {status} = useFormContext();
 
  return (
    <div className="status-message">
      <span 
        className="text-style-status-message" 
        style={{color: status?.style}}
      > {status?.message} </span>
    </div>
  )
}