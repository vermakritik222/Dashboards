import React from "react";
import "./sass/StatusBar.scss";
import StatusBarCard from "./StatusBarCard";

function StatusBar() {
  return (
    <div className="dashboard4_statusbar">
      <StatusBarCard
        Amount={1200}
        Title={"Total income"}
        ProgressVal={50}
        Color="#f5789d"
      />
      <StatusBarCard
        Amount={1200}
        Title={"Total Expense"}
        ProgressVal={34}
        Color="#96a7f9"
      />
      <StatusBarCard
        Amount={1200}
        Title={"Total bonus"}
        ProgressVal={68}
        Color="#a07bc8"
      />
    </div>
  );
}

export default StatusBar;
