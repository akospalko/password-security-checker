import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FormContextProvider from "../context/FormContext.jsx";
import ModalContextProvider from "../context/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FormContextProvider>
    <ModalContextProvider>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </ModalContextProvider>
  </FormContextProvider>
)