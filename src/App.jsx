// Authentication page layout wrapper, context 
import "./App.css"
import Login from "./containers/Login"
import Signup from "./containers/Signup"
import FormContextProvider from "../context/FormContext"

function App() {
  return (
    <FormContextProvider>
      <div className="page-layout">
        <Signup/>
        <Login/>
      </div>
    </FormContextProvider>
  )
}

export default App