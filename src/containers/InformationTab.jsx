// Display information about the webpage: date of creation, terms, policy, etc.
import {TEXT} from "../util/DataStorage";
import Button from "../components/Button";
import "./InformationTab.css";
import "../CustomFonts.css";

export default function InformationTab() {
  return (
    <div className="information-tab"> 
      <div className="information-tab-content">
        {/* copyright */}
        <span className="paragraph"> {TEXT.COPYRIGHT} </span>
        {/* legal information */}
        <div className="information-tab-links">
          <a 
            className="text-style-terms" 
            href="#terms"
            onClick={() => {alert(TEXT.NAV_TO_TERMS)}}
            > {TEXT.TERMS} 
          </a>
          <a 
            className="text-style-terms" 
            href="#privacy"
            onClick={() => {alert(TEXT.NAV_TO_PRIVACY)}}
            > {TEXT.PRIVACY} 
          </a>
        </div>
        {/* menu */}
        <Button 
          clicked={() => {alert(TEXT.OPEN_MENU)}}
          buttonStyle="button-information-tab-menu"
        > 
          <div className="information-tab-menu">
            {[...Array(3)].map((_, index) => (
              <span key={index} className="information-tab-menu-ellipsis"></span>
            ))}
          </div>
        </Button>
      </div>
    </div>
  )
}