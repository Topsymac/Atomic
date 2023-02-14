import React from "react";
import Theme from "../Theme/Theme";
// import Dashboard from '../Dashboard/Dashboard';
import Logos from "./Logos";
import "../sidebar/sidebar.css";
import dashboard from "../../Assets/dashboard-overview.svg";
import wallets from "../../Assets/wallet-side-icon.svg";
import transaction from "../../Assets/transaction-side-icon.svg";
import NFT from "../../Assets/myNFT-icon-copy.svg";
import Exchange from "../../Assets/exchange-icon.svg";
import Hub from "../../Assets/hub-icon.svg";
import settings from "../../Assets/settings-side-icon.svg";
import support from "../../Assets/help-side-icon.svg";
import DashboardSide from "../Sidelink/DashboardSide";
import WalletSide from "../Sidelink/WalletSide";
import Transactions from "../Sidelink/Transactions";
import NftSide from "../Sidelink/NftSide";
import Exchanges from "../Sidelink/Exchange";
import HubSide from "../Sidelink/HubSide";
import SettingsSide from "../Sidelink/SettingsSide";
import HelpSide from "../Sidelink/HelpSide";

const Sidebar = () => {
  return (
    <div className="side-wrapper">
      <Logos />
      <div className="menu-wrapper">
        <p>Overview</p>
        <div className="menuList">
            <li>
              <img src={dashboard} alt="" />
              <DashboardSide />
              {/* <div>Dashboard</div> */}
            </li>
            <li>
              <img src={wallets} alt="" />
              <WalletSide/>
              {/* <div>Wallets/Portfolio</div> */}
            </li>
            <li>
              <img src={transaction} alt="" />
              <Transactions/>
              {/* <div>Transactions</div> */}
            </li>
            <li>
              <img src={NFT} alt="" />
              <NftSide/>
              {/* <div> NFTs</div> */}
            </li>
            <li>
              <img src={Exchange} alt="" />
              <Exchanges/>
              {/* <div>Exchange</div> */}
            </li>
            <li>
              <img src={Hub} alt="" />
              <HubSide/>
              {/* <div>Roqqu Hub</div> */}
            </li>
          
        </div>
        <p>Account</p>
        <div className="menuList">
          <li>
            <img src={settings} alt="" />
            <SettingsSide/>
            {/* <div>Settings</div> */}
          </li>
          <li>
            <img src={support} alt="" />
            <HelpSide/>
            {/* <div>Help & Support</div> */}
          </li>
        </div>
      </div>
      <Theme />
      {/* <Dashboard/> */}
    </div>
  );
};

export default Sidebar;
