import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BsFillPinAngleFill } from "react-icons/bs";
import { useState } from "react";
import EditModal from "../Edit/Edit";

import "./Card.css";
import { Fragment } from "react";
const Card = (props) => {
      const [openEditModel, setEditModel] = useState(false);
  const setLocalArr=props.setLocalArr
      const Id = props.id;
      const title = props.title;
      const body = props.body;
      let pinnedStatus=props.pinnedStatus;
      console.log(Id,pinnedStatus)
const refreshHandler=props.refresh;
      const editCardHandler=()=>{
            setEditModel(true)
      }

      
    

  return (
      <Fragment>
    <div id={Id} className="fullcard">
      <div className="modal__container">
        <div className="modal__main" onClick={()=> {
          editCardHandler(Id)
        }}>
          <h1 className="card__title">{title}</h1>
          <p className="card__description" >
 {body}{" "}
          </p>
        </div>
        <div className="card__buttons">
          <div class="card__delete" onClick={() => {
            props.delete(Id);
          }}>
            <span>
              <MdDelete />{" "}
            </span>
          </div>
          <div className="unit">
          <div class="card__edit" onClick={()=>{
            console.log(Id)
            editCardHandler(Id);
          }}>
            <FaRegEdit />
          </div>
          <div class={pinnedStatus ? `card__pinActive` : `card__pin`} >
            <BsFillPinAngleFill onClick={()=>{
                  pinnedStatus = !pinnedStatus;
                  props.pinCardHandler(Id,pinnedStatus)
                }}/>
          </div>
          </div>
        </div>
      </div>
    </div>
    {openEditModel && (
      <EditModal closeModal={setEditModel} id={Id} title={title} body={body} setLocalArr={setLocalArr} refreshHandler={refreshHandler}/>
    )}
    </Fragment>
  );
};

export default Card;
