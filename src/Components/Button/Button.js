import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <div>
        <button className='button-60' type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
        
    </div>
  )
}

export default Button