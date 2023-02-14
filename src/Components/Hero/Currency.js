import React from 'react';
import "../Hero/hero.css";
import flag from "../../Assets/ngn-flag.svg";
// import arrow from "../../Assets/Vector.png"


const Currency = () => {
  return (
    <div className='currency'>
      <img src={flag} alt="" />
      <span>NGN</span>
      {/* <img src={arrow} alt="" /> */}
    </div>
  )
}

export default Currency