import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./sass/News.scss";
import { IconButton } from "@mui/material";
import NewsCard from "./NewsCard";

function News() {
  return (
    <div className="dashboard2__news">
      <header>
        <h2 className="dashboard2__news__heading">News</h2>
        <IconButton style={{ borderRadius: "50%", height: "max-content" }}>
          <SettingsOutlinedIcon style={{ color: "#4a556e" }} />
        </IconButton>
      </header>
      <section className="dashboard2__news__content">
        <NewsCard
          heading={"Bloomberg"}
          time={"48min"}
          content={
            "Buy Now, Pay Later Installment Plans Are Having a Moment Again"
          }
        />
        <NewsCard
          heading={"CNBC"}
          time={"1h"}
          content={"Apple sells $6.5B of bonds in last debt offering"}
        />
        <NewsCard
          heading={"MarketWatch"}
          time={"2h"}
          content={
            "Here's how the 6 Big Tech Stocks now rank, from worst to fist"
          }
        />
      </section>
    </div>
  );
}

export default News;
