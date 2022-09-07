import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from '../Modal/Modal';
import NoteCards from '../noteCards/NoteCards';
import Button from '../Button/Button';

import {db} from "../../firebase_config.js";
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore";
import Card from '../Card2/Card';


const Home = () => {
  const [openModal, setOpenModal] = useState(false)
  const noteCollectionRef=collection(db,"userNotes");
  const [localArr,setLocalArr]=useState([]);

  const updateLocalArr=(title,body,pinned,id)=>{
    setLocalArr(prev=>[...prev,{title,body,pinned,id}])
  }

const [refresh,setRefresh]=useState(false);
  const refreshHandler = ()=>{
    setRefresh((prev)=>!prev)
    console.log(refresh)
  }
  const deleteCardHandler = async(id)=>{
setLocalArr((prev)=>{
  const local=[...prev];
  for(let i=0;i<local.length;i++){
    console.log(local[i])
    if(local[i].id===id){
      local.splice(i,1);
    }
  }
  return local
})
  const noteDoc=doc(db,"userNotes",id);
  await deleteDoc(noteDoc);
  }

  const editCardHandler=(id,modelStatus)=>{

  }


  

  useEffect(()=>{
    const getNotes=async()=>{
const data=await getDocs(noteCollectionRef);
const response=data.docs.map(doc=>({...doc.data() , id:doc.id }))
console.log(response);
setLocalArr(response)
}
getNotes();
},[])

const noteTiles= localArr.map(item => <Card title={item.title} body={item.body} id={item.id} key={item.id} delete={deleteCardHandler}/>)

  return (
    <div>

    {noteTiles}
      <Button onClick={()=> setOpenModal(true)}>Add Note</Button>
      {openModal && <Modal closeModal={setOpenModal} refresh={refreshHandler} addNote={updateLocalArr} />}
    </div>
  )
}

export default Home