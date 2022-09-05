import React from 'react'
import { MdDeleteForever} from 'react-icons/md'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <span>This is my first note</span>
        <div className="card__footer">
          <small>date</small>
        <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>
    </div> 
  )
}

export default Card