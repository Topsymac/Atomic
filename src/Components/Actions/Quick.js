import React from 'react';
import More from './More';
import "./quick.css";
import buy from "../../Assets/buy-assets-icon.svg";
import sell from "../../Assets/sell-assets-icon.svg";
import globe from "../../Assets/globe.svg";
import signOut from "../../Assets/sign-out.svg";
import searchIcon from "../../Assets/search-icon.svg";
import swapCoin from "../../Assets/swap-coin-icon.svg";

const Quick = () => {
  const arrayOfObjects = [
    {
      imageUrl: buy,
      text: "Buy Assets",
    },
    {
      imageUrl: sell,
      text: "Sell Assets",
    },
    {
      imageUrl: globe,
      text: "Buy Globe",
    },
    {
      imageUrl: signOut,
      text: "Sign Out",
    },
    {
      imageUrl: searchIcon,
      text: "Search Assets",
    },
    {
      imageUrl: swapCoin,
      text: "Swap Assets",
    },
  ];
  return (
    <div>
        <div className="wrapper">
            <p>Quick Actions</p>
            <p>
                <a href="/">Show More</a> 
                <img src="" alt="" />
            </p>
        </div>
        <div className="actions-wrapper">
        {/* <More imageUrl={buy} text="Buy Assets" />
        <More imageUrl={sell} text="Sell Assets" />
        <More/>
        <More/>
        <More/>
        <More/> */}
        {
          arrayOfObjects.map((object) => {
            return <More imageUrl={object.imageUrl} text={object.text} />
          })
        }
        </div>
    </div>
  )
}

export default Quick