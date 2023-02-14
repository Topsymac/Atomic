import React from 'react';
import "../Hero/hero.css";
import addmoney from "../../Assets/download.svg";
import sendmoney from "../../Assets/upload.svg";




const AddMoney = () => {
  return (
    <div className='Money'>
      <div  className='addmoney'>
      <img src={addmoney} alt="" />
      <p>Add Money</p>
      </div>

      <div className='sendmoney'>
      <img src={sendmoney} alt="" />
      <p>Send Money</p>
    </div>
    </div>

  )
}

export default AddMoney