import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./sass/QuotesCard.scss";

function QuotesCard() {
  return (
    <div className="dashboard2__QuotesCard">
      <div className="dashboard2__QuotesCard__headingbar">
        <h2 className="dashboard2__QuotesCard__heading">Quotes</h2>
        <div className="dashboard2__QuotesCard__headingIcons">
          <Checkbox
            icon={<StarOutlineIcon style={{ color: "#4a556e" }} />}
            checkedIcon={<StarIcon style={{ color: "yellow" }} />}
          />
          <Checkbox
            icon={
              <NotificationsActiveOutlinedIcon style={{ color: "#4a556e" }} />
            }
            checkedIcon={
              <NotificationsActiveIcon style={{ color: "yellow" }} />
            }
          />
          <IconButton style={{ borderRadius: "50%", height: "max-content" }}>
            <SettingsOutlinedIcon style={{ color: "#4a556e" }} />
          </IconButton>
        </div>
      </div>

      <div className="dashboard2__QuotesCard__content">
        <div className="dashboard2__QuotesCard__content-left">
          <p>AAPL Apple</p>
          <div className="dashboard2__QuotesCard__content-left__incontent">
            <h1>145.62</h1>
            <div>
              <p>+0.19</p>
              <p>0.44%</p>
            </div>
          </div>
          <p className="dashboard2__QuotesCard__content__date">
            open, 07/29 09.34 EDT
          </p>
        </div>
        <div className="dashboard2__QuotesCard__content-right">
          <div className="dashboard2__QuotesCard__content-high">
            <p>high</p>
            <div>144.98</div>
          </div>
          <div className="dashboard2__QuotesCard__content-low">
            <p>low</p>
            <div>144.98</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuotesCard;
