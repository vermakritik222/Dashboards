import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, IconButton } from "@mui/material";
import "./sass/Industry.scss";
import IndustryCard from "./IndustryCard";

function Industry() {
  return (
    <div className="dashboard2__industry">
      <header>
        <h2 className="dashboard2__industry_heading">Industry</h2>
        <div className="dashboard2__industry__headingicons">
          <IconButton
            style={{
              borderRadius: "10px",
              height: "max-content",
              backgroundColor: "white",
              marginRight: "10px",
            }}
          >
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
          <IconButton
            style={{
              borderRadius: "10px",
              height: "max-content",
              backgroundColor: "white",
              marginRight: "10px",
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
          <IconButton style={{ borderRadius: "50%", height: "max-content" }}>
            <SettingsOutlinedIcon style={{ color: "#4a556e" }} />
          </IconButton>
        </div>
      </header>
      <section>
        <div className="dashboard2__industry-left">
          <div className="dashboard2__industry-left__btnCover">
            <Button
              variant="outlined"
              style={{
                background: "#364577b8",
                color: "white",
                borderColor: "#364577",
              }}
            >
              1 Day
            </Button>
          </div>

          <div className="dashboard2__industry-left__btnCover">
            <Button
              style={{
                color: "white",
                borderColor: "white",
              }}
              variant="outlined"
            >
              5 Days
            </Button>
          </div>

          <div className="dashboard2__industry-left__btnCover">
            <Button
              style={{
                color: "white",
                borderColor: "white",
              }}
              variant="outlined"
            >
              1 Mon
            </Button>
          </div>

          <div className="dashboard2__industry-left__btnCover">
            <Button
              style={{
                color: "white",
                borderColor: "white",
              }}
              variant="outlined"
            >
              3 Mons
            </Button>
          </div>
        </div>

        <div className="dashboard2__industry-right">
          <IndustryCard />
          <IndustryCard />
        </div>
      </section>
    </div>
  );
}

export default Industry;
