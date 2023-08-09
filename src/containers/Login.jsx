// Login information and authentication button  
import Logo_1x from "../assets/acme.png";
import Logo_2x from "../assets/acme@2x.png";
import Logo_3x from "../assets/acme@3x.png";
import {TEXT} from "../util/DataStorage";
import Button from "../components/Button";
import {useFormContext} from "../../context/FormContext";
import {useMediaQuery} from "react-responsive";
import InformationTab from "./InformationTab";
import "./Login.css";
import "../CustomFonts.css";

export default function Login() {
  // CONTEXT
  const {isSubmitting, submitFormHandler, formData} = useFormContext();
  
  // MEDIA QUERY
  const isSmallScreen = useMediaQuery({query: "(max-width: 767px)"})
  
  // STYLE
  const backgroundImg = "https://images.unsplash.com/photo-1691071716244-db306a482fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  const backgroundImgStyle = {
    backgroundImage: `url(${backgroundImg})`, 
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  }

  return (
    <div className="login"> 
      <div className="login-content">
        <div className="login-logo"> 
          <img 
            srcSet={`
              ${Logo_1x} 320w,
              ${Logo_2x} 540w,
              ${Logo_3x} 1280w
            `} 
            sizes="
              (max-width: 320px) 320px,
              (max-width: 549px) 549px,
              (min-width: 768px) 1280px"
            alt="logo"
          />
        </div>
        <h2 className="login-header header-2"> {TEXT.HEADER_LOGIN} </h2>
        <h4 className="login-cta-text header-4"> {TEXT.CTA_TEXT_LOGIN} </h4>
        <div className="login-button"> 
          <Button 
            buttonStyle="button-login" 
            clicked={submitFormHandler}
            disabled={isSubmitting || (!formData["email"]?.value) || !formData["password"]?.value }
          >
            <span className="text-style-button">
              {TEXT.BUTTON_LOGIN}
            </span>
          </Button>
        </div>
      </div>
      {isSmallScreen && <InformationTab/>}
      <div style={backgroundImgStyle} className="login-background-img"> </div>
      <div className="login-background-blur"> </div>
    </div>
  )
}