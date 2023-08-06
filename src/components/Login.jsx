// Login information and authentication button  
import './Login.css'
import './Shared.css'
import Logo_1 from '../assets/acme.png'
import { TEXT } from '../DataStorage'
import Button from './UI/Button'

export default function Login() {
  const backgroundImg = 'https://images.unsplash.com/photo-1510074232337-05d50fa189ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  const backgroundImgStyle = {
    backgroundImage: `url(${backgroundImg})`, // Replace this with the URL of your background image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  }
 
  return (
    <div className='login'> 
      <div className='login-content'>
        <div className='login-logo'> 
          <img src={Logo_1} alt='logo' />
        </div>
        <h2 className='login-header header-2'> {TEXT.HEADER_LOGIN} </h2>
        <h4 className='login-cta-text header-4'> {TEXT.CTA_TEXT_LOGIN} </h4>
        <div className='login-button'> 
          <Button 
            buttonStyle='button-login' 
            clicked={()=> {alert('login btn is pressed')}}
          >
            <span className='text-style-button'>
              {TEXT.BUTTON_LOGIN}
            </span>
          </Button>
        </div>
      </div>
      <div style={backgroundImgStyle} className='login-background-img'> </div>
      <div className='login-background-blur'> </div>
    </div>
  )
}