import { Avatar, Button, IconButton } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

import React from "react";
import "./sass/Nav.scss";
import { LogoutOutlined } from "@mui/icons-material";
function Nav() {
  return (
    <div className="dashboard3__nav">
      <header>
        <h1 className="dashboard3__nav__logo">LOGO</h1>
      </header>
      <section className="dashboard3__nav__items">
        <div className="dashboard3__nav__item">
          <Button style={{ color: "white" }} startIcon={<BarChartIcon />}>
            home
          </Button>
        </div>

        <div className="dashboard3__nav__item">
          <Button
            style={{ color: "white" }}
            startIcon={<DashboardOutlinedIcon />}
          >
            Dashboard
          </Button>
        </div>

        <div className="dashboard3__nav__item">
          <Button
            style={{ color: "white" }}
            startIcon={<BookmarkBorderOutlinedIcon />}
          >
            save
          </Button>
        </div>

        <div className="dashboard3__nav__item">
          <Button
            style={{ color: "white" }}
            startIcon={<SecurityOutlinedIcon />}
          >
            security
          </Button>
        </div>

        <div className="dashboard3__nav__item">
          <Button
            style={{ color: "white" }}
            startIcon={<PeopleOutlineOutlinedIcon />}
          >
            profile
          </Button>
        </div>
      </section>
      <section>
        <div>
          <IconButton style={{ color: "red" }}>
            <LogoutOutlined fontSize="large" />
          </IconButton>
        </div>
        <div className="dashboard3__nav__item">
          <IconButton>
            <Avatar src="https://thumbs.dreamstime.com/z/vector-illustration-avatar-dummy-sign-collection-avatar-image-stock-symbol-web-vector-design-avatar-dummy-137160097.jpg" />
          </IconButton>
        </div>
      </section>
    </div>
  );
}

export default Nav;
