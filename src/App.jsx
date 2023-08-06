import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import InformationTab from './components/InformationTab'
import { useMediaQuery } from 'react-responsive'

function App() {
  // MEDIA QUERY
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' })
    
  return (
    <div className='authentication-wrapper'>
      <Signup/>
      <Login/>
      {isSmallScreen && <InformationTab/>}
    </div>
  )
}

export default App