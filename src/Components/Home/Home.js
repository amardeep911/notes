import React from 'react'
import { useState } from 'react';
import Modal from '../Modal/Modal';
import NoteCards from '../noteCards/NoteCards';
import Button from '../Button/Button';


const Home = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <NoteCards openModel={setOpenModal}/> 
      <Button onClick={()=> setOpenModal(true)}>Add Note</Button>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  )
}

export default Home