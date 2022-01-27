import React from "react";
import UpdateIcon from "@mui/icons-material/Update";
import "./sass/TotalBalance.scss";
import { Button } from "@mui/material";

function TotalBalance() {
  return (
    <div className="dashboard3__totalBalance">
      <header>
        <div className="dashboard3__totalBalance__heading">
          <h2>total balance</h2>
        </div>
      </header>
      <section>
        <div className="dashboard3__totalBalance__left">
          <p>my balance</p>
          <h1>$ 932,128.00</h1>
          <p>19,49673137 BTC</p>
        </div>
        <div className="dashboard3__totalBalance__right">
          <div className="dashboard3__totalBalance__right__inr">
            <div className="dashboard3__totalBalance__right__inr-iconbox">
              <div className="dashboard3__totalBalance__right__inr-icon">
                <UpdateIcon style={{ color: "#5d8ccf" }} />
              </div>
              <div className="dashboard3__totalBalance__right__inr-content">
                <p>$ 1,331.00</p>
                <p>income</p>
              </div>
            </div>
            <Button
              variant="contained"
              style={{ backgroundColor: "#215ef1", width: "100%" }}
            >
              receive
            </Button>
          </div>

          <div className="dashboard3__totalBalance__right__inl">
            <div className="dashboard3__totalBalance__right__inl-iconbox">
              <div className="dashboard3__totalBalance__right__inl-icon">
                <UpdateIcon style={{ color: "#4698b9" }} />
              </div>
              <div className="dashboard3__totalBalance__right__inl-content">
                <p>$ 231.00</p>
                <p>expense</p>
              </div>
            </div>
            <Button
              variant="contained"
              style={{ backgroundColor: "#4698b9", width: "100%" }}
            >
              send
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TotalBalance;
