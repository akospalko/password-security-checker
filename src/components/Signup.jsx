// Signup window with authentication form and site information
import './Signup.css';
import AuthenticationModal from './AuthenticationModal';
import InformationTab from './InformationTab';
import { useMediaQuery } from 'react-responsive'

export default function Signup() {
  // MEDIA QUERY
  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' })
    
  return (
    <div className='signup'>
      <AuthenticationModal/>
      {isLargeScreen && <InformationTab/>}
    </div>
  )
}
