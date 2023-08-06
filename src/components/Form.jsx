import { useState } from "react"
import { TEXT } from "../DataStorage"
import './AuthenticationModal.css'
import './Form.css'
import Button from "./UI/Button"
import passwordVisibleIcon from '../assets/fa-eye.png'
import passwordHiddenIcon from '../assets/fa-eye-slash.png'
import PasswordSecurityMeter from "./PasswordSecurityMeter"

export default function Form() {
  // TEMPLATE
  const formDataTemplate = {
    email: {
      value: '',
    },
    password: {
      value: '',
    }, 
    rememberMe: {
      value: false,
    }
  }

  // STATES
  const [formData, setFormData] = useState(formDataTemplate);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);

  // HANDLERS
  const focusHandler = (inputIndex) => {
    setFocusedIndex(inputIndex);
  }
  const blurHandler = () => {
    setFocusedIndex(null);
  }

  const togglePasswordVisibilityHandler = () => {
    setIsPasswordVisible(prevValue=> !prevValue);
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    // prepare data
    // post request
  }
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
  // Input fields
  const inputEmail = (
    <div 
      className='input-wrapper'
      onFocus={() => focusHandler(0)}
      onBlur={() => blurHandler()}
    >
      <div className='label-input-field-wrapper'>
        <label 
          className={`
            input-label 
            text-style-label 
            ${focusedIndex === 0 && 'text-style-label--active'}`}
        > Email </label>
        <input 
          className='input-field text-style-input' 
          type='email' name='email' 
          onChange={inputChangeHandler}
          value={formData['email']?.value}
        />
      </div>
    </div>
  )
  const inputPassword = (
    <div 
      className='input-wrapper'
      onFocus={() => focusHandler(1)}
      onBlur={() => blurHandler()}
    >
      <div className='label-input-field-wrapper'>
        <label 
          className={`
          input-label 
          text-style-label 
          ${focusedIndex === 1 && 'text-style-label--active'}`}
        > 
        Password </label>
        <input
          className='input-field text-style-input' 
          type={isPasswordVisible ? 'text' : 'password'} 
          name='password' 
          onChange={inputChangeHandler}
          value={formData['password']?.value}      
        />
      </div>
      <div
        className='password-visibility-toggle-button'
        onClick={togglePasswordVisibilityHandler}
      > 
        <Button 
          type='button'
          clicked={e => e.preventDefault()}
          buttonStyle='button-password-visibility-toggler' 
        >
          <img src={isPasswordVisible ? passwordVisibleIcon : passwordHiddenIcon}/>
        </Button>
      </div>
      <PasswordSecurityMeter password={formData['password'].value} />
    </div>
  )

  // remember authentication data
  const rememberMe = (
    <div className='authentication-remember-me header-5'>
      <input 
        type='checkbox' 
        value={false} 
        className='input-checkbox'
      />
      <span> {TEXT.REMEMBER_ME} </span>  
    </div>
  )

    const statusMessage = (
      <div className='status-message'>
        <span style={{color:'red'}}> Test status </span>
    </div>
    )

    const submitButton = (
      <div className='signup-button'>
        <Button 
          buttonStyle='button-signup' 
          clicked={submitFormHandler}
          type='submit'
        > 
          <span className='text-style-button'>
            {TEXT.BUTTON_SIGNUP} 
          </span>
        </Button>
      </div>
    )

  return (
    <form id='authentication-form' className='authentication-form'>
      {inputEmail}
      {inputPassword}
      {rememberMe}
      <div className='submit-form-wrapper'> 
        {statusMessage}
        {submitButton}
      </div>  
    </form>
  )
}