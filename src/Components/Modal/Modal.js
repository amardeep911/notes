import { async } from "@firebase/util";
import React, { useState } from "react";
import Button from "../Button/Button";
import { db } from "../../firebase_config.js";
import { collection, getDocs, addDoc } from "firebase/firestore";
import classes from './Modal.module.css';



const Modal = ({ closeModal, refresh, addNote, Title, Body }) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  

  const noteCollectionRef = collection(db, "userNotes");

  async function saveHandler() {
    const response = await addDoc(noteCollectionRef, {
      title: title,
      body: body,
      pinned: false,
    });
    const id = response.id;
    addNote(title, body, false, id);

    // refresh();
  }
  return (
    <div className={classes.modal__backdrop}>
      <div className={classes.modal__container}>
        <div className={classes.modal__main}>
          <input
            type="text"
            className={classes.modal__title}
            placeholder="Enter title"
            onChange={(event) => setTitle(event.target.value)}
          />
          <hr className="modal__line" />
          <textarea
            type="text"
            className={classes.modal__text}
            placeholder="Notes goes here"
            onChange={(event) => setBody(event.target.value)}
          />
          <div className={classes.modal__buttons}>
            <Button
              onClick={() => {
                saveHandler();
                closeModal(false);
              }}
            >
              Save
            </Button>
            <Button onClick={() => closeModal(false)}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
