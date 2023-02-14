import React from 'react'
import Balance from "./Balance";
import Currency from "./Currency";
import AddMoney from "./AddMoney";
// import SendMoney from "./SendMoney";
import "../Hero/hero.css";


const Hero = () => {
  return (
    <div>
        <Balance/>
        <Currency/>
        <AddMoney/>
        {/* <SendMoney/> */}
    </div>
  )
}

export default Hero