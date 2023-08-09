// Form context: form states, related logic, helper functionalities
import { createContext, useContext, useState } from "react";
import axios from "axios"
import { PASSWORD_SECURITY_RULES, FORM_DATA_TEMPLATE } from "../src/util/DataStorage";

// Create context
const FormContext = createContext();

// Export consumed context
export const useFormContext = () => {
  return useContext(FormContext);
}

// Create provider
export default function FormContextProvider({children}) {
  // STATE
  const [formData, setFormData] = useState(FORM_DATA_TEMPLATE);
  const [status, setStatus] = useState({style: '', message: ''});
  const [rememberCredentials, setRememberCredentials] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [highestActiveLevel, setHighestActiveLevel] = useState(null); 

  // HELPER FUNCTIONS
  // Convert form data to request compatible format
  const convertData = (formData) => {
    let convertedData = {};
    Object.keys(formData).forEach(
      item => {
        convertedData = { 
          data: {
            ...convertedData?.data, 
            [item]: formData[item]?.value
          }
        }
      }
    )
    return convertedData;
  }

  // Update status message/ apply custom color to text
  const updateStatus = (color, message) => {
    setStatus(prevStatus => ({
      ...prevStatus,
      style: color || "#ffffff",
      message: message || '',
    }));
  }
  
  // Update local storage with form credentials based on checkbox value (set/remove)
  const updateLocalStorageCredentials = (credentials, rememberCredentials) => {
    if (rememberCredentials) {
      localStorage.setItem("storedCredentials", JSON.stringify({ email: credentials?.email?.value, password: credentials?.password?.value }));
      localStorage.setItem("storedRememberMeState", rememberCredentials);
    } else {
      localStorage.removeItem("storedCredentials");
      localStorage.removeItem("storedRememberMeState");
    }
  } 

  // HANDLERS
  // Submit form
  const submitFormHandler = async (e) => {
    e.preventDefault();
    // post request
    try {
      setIsSubmitting(true);
      const response = await axios.post("/authenticate", convertData(formData));
      const {name, error} = response.data?.result ?? {}
      if(error) { // on unsuccessfull auth (invalid credentials)
        updateStatus("var(--color-3)", error);
        // empty password field 
        setFormData(prevForm => {
          return {
            ...prevForm, 
            "password": {...prevForm["password"], value: ''},    
          }
        })
      } else { // on successfull auth
        updateStatus("var(--color-3)", `Welcome ${name}`); // welcome user status
        setTimeout(() => { // reset auth status message with a delay
          updateStatus( // set status to display the current password security level
            PASSWORD_SECURITY_RULES[highestActiveLevel]?.style, 
            `${PASSWORD_SECURITY_RULES[highestActiveLevel]?.label} password` 
          )
        }, [1500])
        // populate form with remembered creds
        updateLocalStorageCredentials(formData, rememberCredentials);
      }
    } catch (error) {
      updateStatus("var(--color-3)", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <FormContext.Provider 
      value={{
        formData, setFormData,
        status, setStatus,
        rememberCredentials, setRememberCredentials,
        isSubmitting, setIsSubmitting,
        highestActiveLevel, setHighestActiveLevel,
        submitFormHandler,
      }}
    > {children}
    </FormContext.Provider>
  )
}