import React from 'react';
import "../Card/card.css";

const Card = ({heading,body,button}) => {
  return (
    <div className='Card-Wrapper' >
        <b>{heading}</b>
        <p>{body}</p> 
        <button>{button}</button>
    </div>
  )
}

export default Card