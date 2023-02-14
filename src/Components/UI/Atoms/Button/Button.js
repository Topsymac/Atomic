import React from 'react';
import "../Button/button.css";

const Button = ({button}) => {
  return (
    <div>
        <button className='btn'>{button}</button>
    </div>
  )
}

export default Button