import React from 'react';
import Assets from './Assets';
import "./assets.css";
import usdt from "../../Assets/usdt.png";
import graph from "../../Assets/line chart.png";


const Graph = (props) => {
  return (
    <div>
        <Assets/>
        <div className="header">
            <img src={usdt} alt="" />
            <p>{props.name} <span>{props.alias}</span></p> 
        </div>
        <div className="assetCard">
            <div className="graph">
                <img src={graph} alt="" />
            </div>
            <div className="details">
                <p>{props.price}</p>
                <p className='percent'>{props.percent}</p>
            </div>
        </div>
    </div>
  )
}

export default Graph