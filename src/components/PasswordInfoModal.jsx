// Modal to show password security rules
import { PASSWORD_SECURITY_RULES } from "../util/DataStorage";
import Button from "./Button";
import "./PasswordInfoModal.css";
import { useModalContext } from "../../context/ModalContext";
import { CloseIcon } from "../assets/SVGIcons";
import { useRef, useEffect } from "react";
import {TEXT} from "../util/DataStorage";

export default function PasswordInfoModal() {
  // STATE
  const {isModalToggled, passwordInfoModalToggler} = useModalContext();

  // REF
  // Reference modal
  const modalRef = useRef(null);
  // Reference close modal btn
  const closeModalButtonRef = useRef(null);

  // EFFECTS
  // Listen for 'esc' button btn -> close modal
  useEffect(() => {
    // Focus on the button when the modal is opened
    if (closeModalButtonRef.current) {
      closeModalButtonRef.current.focus();
    }
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        passwordInfoModalToggler(false);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // Enable/lock scroll when modal is opened
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  // Close modal on outside modal click
  useEffect(() => {
    const outsideClickHandler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        passwordInfoModalToggler(false);
      }
    };
    if (isModalToggled) {
      document.addEventListener('mousedown', outsideClickHandler);
    } else {
      document.removeEventListener('mousedown', outsideClickHandler);
    }
    return () => {
      document.removeEventListener('mousedown', outsideClickHandler);
    };
  }, [isModalToggled, passwordInfoModalToggler]);

  // ELEMENTS
  // Modal header (title + close modal btn)
  const header = (
    <h1 className="header-1 text--margin-top-2rem text--margin-bottom-1rem"> {TEXT.PASSWORD_RULES} </h1>
  )

  const closeModalButton = (
    <div className="password-info-header-button">
      <Button 
        ref={closeModalButtonRef}
        clicked={() => {passwordInfoModalToggler()}} 
        buttonStyle='button-modal-close'
      > <CloseIcon color='var(--color-3)'/> </Button>
    </div>
  )

  // Password rules description
  const rules = (
    <div className="password-info-rules">
      {Object.keys(PASSWORD_SECURITY_RULES).map(rule => (
        <div 
          className="password-info-rules-item"
          key={PASSWORD_SECURITY_RULES[rule].id}
        > 
          <span className="text-style-password-info"> 
            <em 
              style={{color: `${PASSWORD_SECURITY_RULES[rule].style}`}}
              className="text-style-password-info--emphasised"
            > 
              {PASSWORD_SECURITY_RULES[rule].label + " password"}  
            </em>
            <em> 
              {': ' + PASSWORD_SECURITY_RULES[rule].ruleDescription} 
            </em>
          </span> 
        </div>
      ))}
    </div>  
  )

  return (
    <div className="password-info-backdrop">
      <div ref={modalRef} className="password-info-modal">
        {header}
        {closeModalButton}
        {rules}       
      </div>
    </div>
  )
}