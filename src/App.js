import "./App.css";
// import More from "./Components/Actions/More";
import Quick from "./Components/Actions/Quick";
import Graph from "./Components/Assets/Graph";
import Grouping from "./Components/Assets/Grouping";
import Card from "./Components/Card/Card";

import Dashboard from "./Components/Dashboard/Dashboard";
import Hero from "./Components/Hero/Hero";
import Sidebar from "./Components/sidebar/Sidebar";
import graph from "./Assets/line chart.png";
import Button from "./Components/UI/Atoms/Button/Button";

// import chart from "../src/Assets/line chart.png"

function App() {
  return (
    <div className="App">
      <div className="side">
        <Sidebar />
        <br/>
        <Button button ="bngcvjmnvcgf"/>
      </div>
      <div className="main">
        <Dashboard />
        <Hero />
        <Quick />
        
        
        <Card
          heading="Read Latest Happenings"
          body="Read the lastest gist on crypto and blockchain on roqqu Hub"
          button="Coming Soon"
        />
        <Card
          heading="Refer To Earn"
          body="Refer your friends and earn 0.5% on all their transactions when they sign up"
          button="Get Started"
        />
        <Graph name="Doge Coin" alias="DOGE" price="$0.09" percent="+7.43%" />
        <br /><br /><b>More Coins</b><br /><br />
        <table className="table-wrapper">
          <thead className="tabhead">
            <td className="head">#</td>
            <td className="name">Name</td>
            <td className="price">Price</td>
            <td className="change">24hr Change</td>
            <td className="chart">Chart</td>
            <td className="buy"></td>
          </thead>
          <tbody>
            <tr>
              <td className="head">{<Grouping numbering="1"/>}</td>
              <td className="name">{<Grouping currency="BTC"/>}</td>
              <td className="price">{<Grouping price="$23,050.74"/>}</td>
              <td className="price">{<Grouping change="+0.66%"/>}</td>
              <td className="chart">{<Grouping chart={graph}/>}</td>
              <td className="buy"><button>{<Grouping buy="buy"/>}</button></td>
            </tr>
            <tr>
              <td className="head">{<Grouping numbering="2"/>}</td>
              <td className="name">{<Grouping currency="ETH"/>}</td>
              <td className="price">{<Grouping price="$1,578.9"/>}</td>
              <td className="change">{<Grouping change="+0.32%"/>}</td>
              <td className="chart">{<Grouping chart={graph}/>}</td>
              <td className="buy"><button>{<Grouping buy="buy"/>}</button></td>
            </tr>
            <tr>
              <td className="head">{<Grouping numbering="3"/>}</td>
              <td className="name">{<Grouping currency="BTC"/>}</td>
              <td className="price">{<Grouping price="$23,050.74"/>}</td>
              <td className="change">{<Grouping change="+0.66%"/>}</td>
              <td className="chart">{<Grouping chart={graph}/>}</td>
              <td className="buy"><button>{<Grouping buy="buy"/>}</button></td>
            </tr>
            <tr>
              <td className="head">{<Grouping numbering="4"/>}</td>
              <td className="name">{<Grouping currency="ETH"/>}</td>
              <td className="price">{<Grouping price="$1,578.9"/>}</td>
              <td className="change">{<Grouping change="+0.32%"/>}</td>
              <td className="chart">{<Grouping chart={graph}/>}</td>
              <td className="buy"><button>{<Grouping buy="buy"/>}</button></td>
            </tr>
          </tbody>
          
        </table>
        {/* <Grouping
          numbering="1"
          currency="BTC"
          price="$23,050.74"
          change="+0.66%"
          chart="Chart"
        /> */}
        
      </div>
     
    </div>
  );
}

export default App;
