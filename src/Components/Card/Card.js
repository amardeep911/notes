import { async } from "@firebase/util";
import React from "react";

import { MdDeleteForever } from "react-icons/md";
import "./Card.css";
const Card = (props) => {

  const Id = props.id;
  const title = props.title;
  const body = props.body;

  const editCardHandler=async(id)=>{
 const card=document.getElementById(id);
 console.log(card)
 card.classList.add('cardModel')
  }
  const cancelCardHandler=async(id)=>{
    const card=document.getElementById(id);
    console.log(card)
    card.classList.remove('cardModel')
    card.classList.add('removeCardModel')
     }
  return (
    <div className="card" id={Id}>
      <h1>{title}</h1>
      <p>{body}</p>
      <div className="card__footer">
        <small>date</small>
    <button onClick={editCardHandler.bind(this,Id)}>EDIT</button>
    <button onClick={cancelCardHandler.bind(this,Id)}>Cancel</button>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => {
            props.delete(Id);
          }}
        />
      </div>
    </div>
  );
};

export default Card;
