import { FiPlusCircle } from "react-icons/fi";
import classes from "./Ui.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { db } from "../../firebase_config.js";
import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import Card from "../Card2/Card";
import { async } from "@firebase/util";
import EditModal from "../Edit/Edit";
import './Ui.css'

const Ui = () => {
  const [openModal, setOpenModal] = useState(false);
  const [localArr, setLocalArr] = useState([]);
  const [refresh,setRefresh]=useState([false]);
  const dataLimit=6;
  const pageLimit=3;
  const [pages] = useState(Math.round(localArr.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  

  const noteCollectionRef = collection(db, "userNotes");

  const updateLocalArr = (title, body, pinned, id) => {
    setLocalArr((prev) => [...prev, { title, body, pinned, id }]);
    const pageNum=Math.ceil((localArr.length+1)/6);
    console.log(pageNum)
   setCurrentPage(pageNum);
  };
  const refreshHandler=()=>{
    setRefresh(prev=>!prev);
  }

  const pinCardHandler=async(id,pinnedStatus)=>{
    console.log(id)
    setLocalArr((prev=>{
      const local=[...prev];
      for(let i=0;i<local.length;i++){
        
        if(local[i].id===id && pinnedStatus ){
         const note= local.splice(i,1)[0];
         note.pinned=pinnedStatus;
         console.log(note)
         local.splice(0,0,note);
         console.log(local)
        }
        if(local[i].id ===id && !pinnedStatus){
          local[i].pinned=pinnedStatus;
          
            for(i;i<local.length;i++){
              if(local[i].pinned){
             const refnote=local.splice(i,1)[0]
             local.splice(0,0,refnote);
              }
            }
          
        }
      
      }
      console.log(local)
      return local
    }))
    const noteDoc=doc(db,"userNotes",id);
    const newField={pinned:pinnedStatus};
    await updateDoc(noteDoc,newField)
  }

  const deleteCardHandler = async (id) => {
    setLocalArr((prev) => {
      const local = [...prev];
      for (let i = 0; i < local.length; i++) {
  
        if (local[i].id === id) {
          local.splice(i, 1);
        }
      }
      return local;
    });
    const noteDoc = doc(db, "userNotes", id);
    await deleteDoc(noteDoc);
  };
  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(noteCollectionRef);
      const response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const local=[...response];
      for(let i=0;i<response.length;i++){
        if(local[i].pinned===true){
          const pinnedNote=local.splice(i,1)[0];
          local.splice(0,0,pinnedNote);
        }
      }
      setLocalArr(local);
    };
    getNotes();
  }, [refresh]);

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return localArr.slice(startIndex, endIndex);
  };

  const noteTiles = getPaginatedData().map((item) => (
    <Card
      title={item.title}
      body={item.body}
      id={item.id}
      key={item.id}
      pinnedStatus={item.pinned}
      delete={deleteCardHandler}
      pinCardHandler={pinCardHandler}
     setLocalArr={(localArr)=>setLocalArr()}
     refresh={()=>refreshHandler()}
    />
  ));

  //---------------Logic for Pagination--------------------------------------->>>>>>
    function goToNextPage() {
       setCurrentPage(page=>page+1)
    }
  
    function goToPreviousPage() {
      setCurrentPage(page=>page-1)
    }
  
    function changePage(event) {
      const pageNumber = Number(event.target.textContent);
      setCurrentPage(pageNumber);
    }
  

  
    const getPaginationGroup = () => {
      let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
      return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
  

  return (
    <div className={classes.ui__screen}>
    <div className={classes.container}>
      <div className={classes.ui__heading}>
        <text className={classes.ui__title}>Note Keeper</text>
      </div>
      <span className={classes.ui__render}>
        <div className={classes.ui__tiles}>{noteTiles}</div>
      </span>
        <span className={classes.ui__addButton} onClick={() => setOpenModal(true)}>
          <FiPlusCircle />
        </span>
      {openModal && (
        <Modal closeModal={setOpenModal} addNote={updateLocalArr} />
      )}
      
      <div className='pagination'>
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        Prev
      </button>
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
       Next
      </button>
    </div>
      
      </div>
    
    </div>
  );
};

export default Ui;
