import React from 'react'
import classes from './Card.module.css'
const Card = (props) => {
  return (
    <div>
        <div className= {classes.container}>
          
              {props.children}
        

        </div>
    </div>
  )
}

export default Card