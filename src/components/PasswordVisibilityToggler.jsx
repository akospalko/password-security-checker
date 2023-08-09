// Reusable password visibility toggler button used with form inputs
import { useState } from "react";
import "./PasswordVisibilityToggler.css";
import Button from "./Button";
import passwordVisibleIcon1x from "../assets/fa-eye.png";
import passwordVisibleIcon2x from "../assets/fa-eye@2x.png";
import passwordVisibleIcon3x from "../assets/fa-eye@3x.png";
import passwordHiddenIcon1x from "../assets/fa-eye-slash.png";
import passwordHiddenIcon2x from "../assets/fa-eye-slash@2x.png";
import passwordHiddenIcon3x from "../assets/fa-eye-slash@3x.png";

export default function PasswordVisibilityToggler() {
  // STATE
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // HANDLERS
  // Toggle password visibility  
  const togglePasswordVisibilityHandler = (e) => {
    e.preventDefault();
    setIsPasswordVisible(prevValue=> !prevValue);
  }

  // ELEMENTS
  // Img tag srcset parameters
  const showPasswordIcons = `
    ${passwordVisibleIcon1x} 320w,
    ${passwordVisibleIcon2x} 640w,
    ${passwordVisibleIcon3x} 1024w
  `
  const hidePasswordIcons = `
    ${passwordHiddenIcon1x} 320w,
    ${passwordHiddenIcon2x} 640w,
    ${passwordHiddenIcon3x} 1024w
  `
  // Visibility toggler button/icon
  const passwordVisibilityToggler = (
    <div className="password-visibility-toggle-wrapper"> 
      <Button 
        type="button"
        clicked={togglePasswordVisibilityHandler}
        buttonStyle="button-password-visibility-toggler" 
      >
        <img 
          srcSet={isPasswordVisible ? showPasswordIcons : hidePasswordIcons}
          src={isPasswordVisible ? passwordVisibleIcon1x : passwordHiddenIcon1x}
          sizes="
            (max-width: 480px) 320px,
            (max-width: 1024px) 640px,
            1024px"
        />
      </Button>
    </div>
  )
  
  return {passwordVisibilityToggler, isPasswordVisible}
}