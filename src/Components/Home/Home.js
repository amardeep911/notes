import React from 'react'
import { useState } from 'react';
import Modal from '../Modal/Modal';



const Home = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <button onClick={()=> setOpenModal(true)}>Add Note</button>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  )
}

export default Home