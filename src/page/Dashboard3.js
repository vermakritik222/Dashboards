import React from "react";
import BuySell from "../components/Dashboard3/BuySell";
import MyPortfolio from "../components/Dashboard3/MyPortfolio";
import SearchBar from "../components/Dashboard3/SearchBar";
import Statistics from "../components/Dashboard3/Statistics";
import TotalBalance from "../components/Dashboard3/TotalBalance";
import Nav from "../components/Dashboard3/Nav";
import Watchlist from "../components/Dashboard3/Watchlist";
import "./sass/Dashboard3.scss";

function Dashboard3() {
  return (
    <div className="dashboard3">
      <Nav />
      <SearchBar />
      <div className="dashboard3__sec1">
        <div className="dashboard3__sec1__div1">
          <TotalBalance />
        </div>
        <div className="dashboard3__sec1__div2">
          <Watchlist />
        </div>
        <div className="dashboard3__sec1__div3">
          <BuySell />
        </div>
      </div>
      <div className="dashboard3__sec2">
        <div className="dashboard3__sec2__div1">
          <Statistics />
        </div>
        <div className="dashboard3__sec2__div2">
          <MyPortfolio />
        </div>
      </div>
    </div>
  );
}

export default Dashboard3;
