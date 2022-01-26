import React from "react";
import "./sass/Nav.scss";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Avatar, IconButton } from "@mui/material";

function Nav() {
  return (
    <div className="dashboard2__nav">
      <div className="dashboard2__nav__logo">
        <h1>LOGO</h1>
      </div>
      <div className="dashboard2__nav__itemlist">
        <div className="dashboard2__nav__item">
          <BarChartIcon style={{ color: "white" }} />
        </div>
        <div className="dashboard2__nav__item">
          <BookmarkBorderOutlinedIcon style={{ color: "white" }} />
        </div>
        <div className="dashboard2__nav__item">
          <DashboardOutlinedIcon style={{ color: "white" }} />
        </div>
        <div className="dashboard2__nav__item">
          <SecurityOutlinedIcon style={{ color: "white" }} />
        </div>
        <div className="dashboard2__nav__item">
          <PeopleOutlineOutlinedIcon style={{ color: "white" }} />
        </div>
      </div>
      <div className="dashboard2__nav__end">
        <Avatar />
        <IconButton>
          <LogoutOutlinedIcon style={{ color: "red" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Nav;
