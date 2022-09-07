import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BsFillPinAngleFill } from "react-icons/bs";

import "./Card.css";
const Card = (props) => {
      const Id = props.id;
      const title = props.title;
      const body = props.body;
      let pinnedStatus=props.pinnedStatus;
      console.log(Id,pinnedStatus)

      
    

  return (
    //   <div className='modal__backdrop'>
    <div id={Id} className="fullcard">
      <div className="modal__container">
        <div className="modal__main">
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
          <div class="card__edit">
            <FaRegEdit />
          </div>
          <div class={pinnedStatus ? `card__pinActive` : `card__pin`} >
            <BsFillPinAngleFill onClick={()=>{
                  console.log(pinnedStatus)
                  pinnedStatus = !pinnedStatus;
                  props.pinCardHandler(Id,pinnedStatus)
                }}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
