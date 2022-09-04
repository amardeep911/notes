import React from 'react'
import Button from '../Button/Button'

import './Modal.css'
const Modal = ({closeModal}) => {
  return (
    <div className='modal__backdrop'>
       
        <div className="modal__container">
        <div className="modal__main">
        <input type="text" className='modal__title' placeholder='Enter title' />
        <hr className='modal__line'/>
        <textarea type="text" className='modal__text' placeholder='Notes goes here' />
        <div className="modal__buttons">
        <Button onClick={()=> closeModal(false)}>Save</Button>
        <Button onClick={()=> closeModal(false)}>Cancel</Button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Modal