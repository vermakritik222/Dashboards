import { BorderAllOutlined, MailOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./sass/SideHeader.scss";

function SideHeader() {
  return (
    <div className="dashboard4_SideHeader">
      <Avatar
        sx={{ width: 56, height: 56 }}
        src="/images/Dashboard4/avatars.jpg"
      />

      <div className="icons">
        <IconButton style={{ color: "rgb(240, 255, 255)" }}>
          <BorderAllOutlined />
        </IconButton>
        <IconButton style={{ color: "rgb(240, 255, 255)" }}>
          <MailOutlined />
        </IconButton>
      </div>
    </div>
  );
}

export default SideHeader;
