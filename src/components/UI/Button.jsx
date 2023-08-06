/* eslint-disable react/prop-types */
// Reusable button component

import './Button.css'

export default function Button(props) {
  // PROPS
  const { children, buttonStyle, clicked } = props;

  return (
    <button
      className={`button-default ${ buttonStyle }`} 
      onClick={clicked}
    >
      {children}
    </button>
  )
}
