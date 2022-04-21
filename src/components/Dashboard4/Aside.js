import { HomeOutlined } from "@mui/icons-material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import { IconButton } from "@mui/material";
import React from "react";
import "./sass/Aside.scss";

function Aside() {
  return (
    <div className="dashboard4_aside">
      <div className="mid">
        <div>
          <IconButton size="large" style={{ color: "rgb(240, 255, 255)" }}>
            <HomeOutlined fontSize="4px" style={{ color: "#f4799e" }} />
          </IconButton>
        </div>
        <div>
          <IconButton size="large" style={{ color: "rgb(240, 255, 255)" }}>
            <BusinessCenterOutlinedIcon
              style={{ color: "rgba(240, 255, 255, 1)" }}
            />
          </IconButton>
        </div>
        <div>
          <IconButton size="large" style={{ color: "rgb(240, 255, 255)" }}>
            <AssessmentOutlinedIcon
              style={{ color: "rgba(240, 255, 255, 1)" }}
            />
          </IconButton>
        </div>
        <div>
          <IconButton size="large" style={{ color: "rgb(240, 255, 255)" }}>
            <BookOutlinedIcon style={{ color: "rgba(240, 255, 255, 1)" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Aside;
