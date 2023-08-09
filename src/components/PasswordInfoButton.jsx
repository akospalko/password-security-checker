// Button to toggle password security rules information
import { useModalContext } from "../../context/ModalContext";
import Button from "./Button";
import { InfoIcon } from "../assets/SVGIcons";
import './PasswordInfoButton.css';

export default function PasswordInfoButton() {
  // CONTEXT
  const {passwordInfoModalToggler} = useModalContext();
  return (
    <div className="page-layout-password-info-button">
      {/* Password rules info button */}
      <Button 
        clicked={() => {passwordInfoModalToggler(false)}}
        buttonStyle='button-modal-open'
      > <InfoIcon color='var(--color-3)'/> </Button>
  </div>
  )
}