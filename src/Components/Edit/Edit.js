import { async } from "@firebase/util";
import React, { useState } from "react";
import Button from "../Button/Button";
import { db } from "../../firebase_config.js";
import {  updateDoc,doc } from "firebase/firestore";
import classes from './Edit.module.css';



const EditModal = (props) => {
    const fun=props.setLocalArr;

  
    const prevTitle=props.title;
    const prevBody=props.body;
    const [editedTitle, setEditedTitle] = useState(prevTitle);
    const [editedBody, setEditedBody] = useState(prevBody);
 
  const Id=props.id;
  console.log(Id)
  const closeModal=props.closeModal;
  const refreshHandler=props.refreshHandler;

//   const noteCollectionRef = collection(db, "userNotes");

  async function updateHandler(id) {

    const noteEditedDoc=doc(db,"userNotes",id);
    const newEditedField={title:editedTitle,body:editedBody};
   const response= await updateDoc(noteEditedDoc,newEditedField);
   console.log(response)
   refreshHandler();
  }

  return (
    <div className={classes.editmodal__backdrop}>
      <div className={classes.editmodal__container}>
        <div className={classes.editmodal__main}>
          <input
            type="text"
            className={classes.editmodal__title}
            placeholder="Enter title"
            defaultValue={prevTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
          />
          <hr className={classes.editmodal__line}/>
          <textarea
            type="text"
            className={classes.editmodal__text}
            placeholder="Notes goes here"
            defaultValue={prevBody}
            onChange={(event) => setEditedBody(event.target.value)}
          />
          <div className={classes.editmodal__buttons}>
            <Button
              onClick={() => {
                updateHandler(Id);
                closeModal(false);
              }}
            >
              update
            </Button>
            <Button onClick={() => closeModal(false)}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;