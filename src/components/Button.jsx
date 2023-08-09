/* eslint-disable react/prop-types */
// Reusable button component
import { forwardRef } from "react";
import "./Button.css";

const Button = forwardRef((props, ref) => {
  // PROPS
  const { children, buttonStyle, clicked, disabled } = props;
  
  return (
    <button
      ref={ref}
      className={`button-default ${ buttonStyle }`} 
      onClick={clicked}
      disabled={disabled}
    > {children}
    </button>
  )
})

Button.displayName = 'Button'; // display name

export default Button;