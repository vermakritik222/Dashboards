import React from "react";
import "./sass/Dashboard4.scss";
import Nav from "../components/Dashboard4/Nav";
import StatusBar from "../components/Dashboard4/StatusBar";
import Graph from "../components/Dashboard4/Graph";
import Card from "../components/Dashboard4/Card";
import Aside from "../components/Dashboard4/Aside";
import RecentTransaction from "../components/Dashboard4/RecentTransaction";
import SideHeader from "../components/Dashboard4/SideHeader";

function Dashboard4() {
  return (
    <div className="Dashboard4">
      <div className="Dashboard4_sec1">
        <Aside />
      </div>
      <div className="Dashboard4_sec2">
        <Nav />
        <StatusBar />
        <Graph />
        <div className="Dashboard4_mid">
          <Card
            Title={"investment"}
            Amount={"12000"}
            Progress={"34%"}
            AddAmount="9"
            Color="#98a7fb"
          />
          <Card
            Title={"Deposit"}
            Progress={"48%"}
            Amount={"15000"}
            AddAmount="19"
            Color="#f6779b"
          />
        </div>
      </div>
      <div className="Dashboard4_sec3">
        <SideHeader />
        <RecentTransaction />
      </div>
    </div>
  );
}

export default Dashboard4;
