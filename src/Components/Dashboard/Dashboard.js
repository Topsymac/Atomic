import React from "react";
import "../Dashboard/dashboard.css";
// import Profile from '../Profile/Profile';
import web from "../../Assets/globe.svg";
import goto from "../../Assets/sign-out.svg";
// import search from "../../Assets/search-icon.svg";
import Search from "../UI/Atoms/Search/Search";

const Dashboard = () => {
  return (
    <div className="dashboard-Wrapper">
      <div className="dashboardLeft">
        <div>Dashboard</div>
      </div>
      <div className="dashboardRight">
        <Search/>
        
        <div className="Profile">
          <img src="" alt="" />
            <button>Temitope Macaulay</button>
        </div>
        <div >
          <img src={web} alt="" />
        </div>
        <div>
          <img src={goto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
