// Signup window with authentication modal form and site information
import InformationTab from "./InformationTab";
import {useMediaQuery} from "react-responsive";
import {TEXT} from "../util/DataStorage";
import AuthenticationForm from "../components/AuthenticationForm";
import "./Signup.css";
import "../CustomFonts.css";

export default function Signup() {
  // MEDIA QUERY
  const isLargeScreen = useMediaQuery({query: "(min-width: 768px)"})
    
  return (
    <div className="signup">
      <div className="signup-modal">
        <h1 className="header-1"> {TEXT.HEADER_SIGNUP} </h1>
        <h6 className="header-6"> {TEXT.CTA_TEXT_SIGNUP} </h6>
        <AuthenticationForm/>
      </div>
      {isLargeScreen && <InformationTab/>}
    </div>
  )
}