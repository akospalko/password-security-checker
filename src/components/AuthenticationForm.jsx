// Authentication form used for both login and signup
import { useState, useEffect } from "react";
import { TEXT } from "../util/DataStorage";
import Button from "./Button";
import PasswordSecurityMeter from "./PasswordSecurityMeter";
import { useFormContext } from "../../context/FormContext";
import FormStatus from "./FormStatus";
import RememberMe from "./RememberMe";
import PasswordVisibilityToggler from "./PasswordVisibilityToggler";
import "./AuthenticationForm.css";
import "../CustomFonts.css";

export default function AuthenticationForm() {
  // CONTEXT
  const {
    formData, setFormData,
    setRememberCredentials,
    isSubmitting,
    submitFormHandler
  } = useFormContext();

  // STATES
  const [focusedIndex, setFocusedIndex] = useState(null); 
  
  // EFFECT
  // set up remember me state on mount
  useEffect(() => {
    const storedCredentials = JSON.parse(localStorage.getItem("storedCredentials"));
    const storedRememberMeState = JSON.parse(localStorage.getItem("storedRememberMeState"));
    if(storedRememberMeState) {
      // update form with local storage items
      setFormData(prevState => {
        return {
          ...prevState,
          ["email"]: {...prevState["email"], value: storedCredentials?.email || ''},
          ["password"]: {...prevState["password"], value: storedCredentials?.password || ''},
        };
      });
      setRememberCredentials(storedRememberMeState);
    }
  }, [])

  // HANDLERS
  // Focus input fields (for credentials) 
  const focusHandler = (inputIndex) => {
    setFocusedIndex(inputIndex);
  }
  // Lose focus on outside click
  const blurHandler = () => {
    setFocusedIndex(null);
  }
  // Input field handler (for credentials)
  const inputChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: { ...prevState[name], value: value }
      };
    });
  }

  // ELEMENTS
  // Password visibility toggler 
  const {passwordVisibilityToggler, isPasswordVisible} = PasswordVisibilityToggler();

  // Email input
  const inputEmail = (
    <div 
      className="input-wrapper"
      onFocus={() => focusHandler(0)}
      onBlur={() => blurHandler()}
    >
      <div className="label-input-field-wrapper">
        <label 
          className={`
            input-label 
            text-style-label
            ${focusedIndex === 0 && "text-style-label--active"}`}
        > {TEXT.EMAIL} </label>
        <input 
          className="input-field header-3" 
          type="email" name="email" 
          onChange={inputChangeHandler}
          value={formData["email"]?.value}
        />
      </div>
    </div>
  )
  // input field
  const inputPassword = (
    <div 
      className="input-wrapper"
      onFocus={() => focusHandler(1)}
      onBlur={() => blurHandler()}
    >
      <div className="label-input-field-wrapper">
        <label 
          className={`
            input-label 
            text-style-label 
            ${focusedIndex === 1 && "text-style-label--active"}`}
        > {TEXT.PASSWORD} </label>
        <input
          className="input-field header-3" 
          type={isPasswordVisible ? "text" : "password"} 
          name="password" 
          onChange={inputChangeHandler}
          value={formData["password"]?.value}      
        />
      </div>
      {passwordVisibilityToggler}
      <PasswordSecurityMeter password={formData["password"].value}/>
    </div>
  )

  // Submit form button
  const submitButton = (
    <div className="signup-button">
      <Button 
        buttonStyle="button-signup" 
        clicked={submitFormHandler}
        type="submit"
        disabled={isSubmitting || (!formData["email"]?.value) || !formData["password"]?.value }
      > 
        <span className="text-style-button">
          {TEXT.BUTTON_SIGNUP} 
        </span>
      </Button>
    </div>
  )

  return (
    <form 
      id="authentication-form" 
      className="authentication-form"
    >
      {inputEmail}
      {inputPassword}
      <RememberMe/>
      <div className="submit-form-wrapper"> 
        <FormStatus/>
        {submitButton}
      </div>  
    </form>
  )
}