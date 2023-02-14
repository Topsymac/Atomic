import React from 'react';
import "../Search/search.css";
import search from "../../../../Assets/search-icon.svg"

const Search = () => {
  return (
    <div>
        <div className="dashboardSearch">
          <img src={search} alt="" />
          <input type="text" placeholder="Search for assets" />
        </div>
    </div>
  )
}

export default Search