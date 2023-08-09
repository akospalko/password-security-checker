// Modal context: modal states, togglers
import { createContext, useContext, useState } from "react";

// Create context
const ModalContext = createContext();

// Export consumed context
export const useModalContext = () => {
  return useContext(ModalContext);
}

// Create provider
export default function ModalContextProvider({children}) {
  // STATE
  const [isModalToggled, setIsModalToggled] = useState(false);

  // HANDLERS
  // Toggle modal
  const passwordInfoModalToggler = (forcedToggleValue = undefined) => {
    setIsModalToggled(prevValue => {
      const toggleValue = forcedToggleValue ? forcedToggleValue : !prevValue; // apply forced value || toggle
      return toggleValue;
    });
  }

  return (
    <ModalContext.Provider 
      value={{
        isModalToggled, 
        passwordInfoModalToggler
      }}
    > {children}
    </ModalContext.Provider>
  )
}