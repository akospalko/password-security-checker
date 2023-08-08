// Authentication page layout wrapper, context 
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import FormContextProvider from '../context/FormContext'

function App() {
  return (
    <FormContextProvider>
      <div className='page-layout'>
        <Signup/>
        <Login/>
      </div>
    </FormContextProvider>
  )
}

export default App