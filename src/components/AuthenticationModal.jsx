// Modal that contains authentication header, cta and form 
import { TEXT } from "../DataStorage"
import './AuthenticationModal.css'
import Form from "./Form"

export default function AuthenticationModal() {
  
  return (
    <div className='authentication-modal'>
      <h1 className='header-1'> {TEXT.HEADER_SIGNUP} </h1>
      <h6 className='header-6'> {TEXT.CTA_TEXT_SIGNUP} </h6>
      <Form/>
    </div>
  )
}