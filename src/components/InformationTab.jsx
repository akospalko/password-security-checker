// Display information about the webpage: date of creation, terms, policy, etc.
import { TEXT } from '../DataStorage';
import './InformationTab.css'

export default function InformationTab() {

  return (
    <div className='information-tab'> 
      <div className='information-tab-content'>
        {/* copyright */}
        <span className='paragraph'> {TEXT.COPYRIGHT} </span>
        {/* legal information */}
        <a className='text-style-terms' href='#terms'> {TEXT.TERMS} </a>
        <a className='text-style-terms' href='#terms'> {TEXT.PRIVACY} </a>
        <div className='information-tab-menu'> 
          <span className='information-tab-menu-ellipsis'> </span>
          <span className='information-tab-menu-ellipsis'> </span>
          <span className='information-tab-menu-ellipsis'> </span>
        </div>
      </div>
    </div>
  )
}
