import React from "react";
import { IconButton } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "./sass/RecentTransaction.scss";
import RecentTransactionItem from "./RecentTransactionItem";

function RecentTransaction() {
  return (
    <div className="dashboard4_recentTransaction">
      <div className="secup">
        <nav>
          <h2>My Card</h2>
          <IconButton style={{ color: "rgb(240, 255, 255)" }}>
            <MoreVertOutlinedIcon style={{ color: "rgb(240, 255, 255)" }} />
          </IconButton>
        </nav>
        <div className="img">
          <img src="/images/Dashboard4/cards.png" alt="" />
        </div>
      </div>
      <div className="secdown">
        <nav>
          <h2>Recent Transaction</h2>
          <IconButton style={{ color: "rgb(240, 255, 255)" }}>
            <MoreVertOutlinedIcon style={{ color: "rgb(240, 255, 255)" }} />
          </IconButton>
        </nav>
        <p>Today</p>
        <section>
          <RecentTransactionItem />
          <RecentTransactionItem />
          {/* <RecentTransactionItem /> */}
        </section>
        <p>Yesterday</p>
        <section>
          <RecentTransactionItem />
        </section>
      </div>
    </div>
  );
}

export default RecentTransaction;
