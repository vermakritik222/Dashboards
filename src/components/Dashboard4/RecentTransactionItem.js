import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import "./sass/RecentTransactionItem.scss";

function RecentTransactionItem() {
  return (
    <div className="dashboard4_recentTransactionItem">
      <div className="secl">
        <div className="img">
          <ShoppingCartOutlinedIcon style={{ color: "#5a5a62" }} />
        </div>
        <div className="data">
          <p>Dribbble</p>
          <p>11:15 AM</p>
        </div>
      </div>
      <div className="secr">
        <p>$10.34</p>
      </div>
    </div>
  );
}

export default RecentTransactionItem;
