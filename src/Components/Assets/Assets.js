import React from 'react'
import "./assets.css"

const Assets = () => {
    return (
        <div className = 'assetWrapper'>
            <div className = "trending">
                <p>Top Trending Assets</p> 
            </div>
            <div className = "losers" >
                <p>Top Losers</p> 
            </div> 
        </div>
    )
}

export default Assets;
