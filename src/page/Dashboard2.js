import React from "react";
import IndexChart from "../components/Dashboard2/IndexChart";
import Industry from "../components/Dashboard2/Industry";
import MyWatchlist from "../components/Dashboard2/MyWatchlist";
import Nav from "../components/Dashboard2/Nav";
import News from "../components/Dashboard2/News";
import QuotesCard from "../components/Dashboard2/QuotesCard";
import "./sass/Dashboard2.scss";

function Dashboard2() {
  return (
    <div className="dashboard2">
      <div className="dashboard2__mainSec">
        <div className="dashboard2__Nav">
          <Nav />
        </div>
        <div className="dashboard2__mainBody">
          <div className="dashboard2__mainBody__row1">
            <IndexChart />
            <QuotesCard />
          </div>
          <div className="dashboard2__mainBody__row2">
            <MyWatchlist />
          </div>
          <div className="dashboard2__mainBody__row3">
            <Industry />
            <News />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard2;
