import React from "react";
import "../Assets/assets.css";

const Grouping = (body) => {
  return (
    <div>
      <div className="group-wrapper">
        <tr>
            <td>{body.numbering}</td>
            <td>{body.currency}</td>
            <td>{body.price}</td>
            <td>{body.change}</td>
            <td><img src={body.chart} alt="" /></td>
            <td>{body.buy}</td>
        </tr>
      </div>
    </div>
  );
};

export default Grouping;



// <button>{body.buy}</button>