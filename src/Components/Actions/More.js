import React from 'react';
import "../Actions/quick.css";

const More = (props) => {
  return (
    <div className='more'>
        <div className="card-wrapper">
            <div className="cardImage">
                <img src={props.imageUrl} alt="" />
            </div>
            
            <div className="cardText">
                <p>{props.text}</p>
            </div>
        </div>
    </div>
  )
}

export default More;