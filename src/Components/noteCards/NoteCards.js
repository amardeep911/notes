import React from 'react'
import Card from '../Card/Card'
import './NotesCard.css'
const NoteCards = (props) => {
  return (
    <div className='notes__list'>
        <div>
          
        <Card/>
        </div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default NoteCards