import { IconButton } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./sass/MyWatchlist.scss";
import MyWatchlistCard from "./MyWatchlistCard";

function MyWatchlist() {
  return (
    <div className="dashboard2__myWatchlist">
      <header>
        <h2 className="dashboard2__myWatchlist__heading"> My Watchlist</h2>
        <div className="dashboard2__myWatchlist__headingicons">
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
          <IconButton
            style={{
              borderRadius: "50%",
              height: "max-content",
            }}
          >
            <SettingsOutlinedIcon style={{ color: "#4a556e" }} />
          </IconButton>
        </div>
      </header>

      <section className="dashboard2__myWatchlist__content">
        <div className="dashboard2__myWatchlist__content__heading">
          <div className="dashboard2__myWatchlist__content__heading-nameNsym">
            <div className="dashboard2__myWatchlist__content__heading-symbol">
              symbol
            </div>
            <div className="dashboard2__myWatchlist__content__heading-name">
              name
            </div>
          </div>

          <div className="dashboard2__myWatchlist__content__heading-data">
            <div className="dashboard2__myWatchlist__content__heading-sparkline">
              sparkline
            </div>
            <div className="dashboard2__myWatchlist__content__heading-change">
              change
            </div>
            <div className="dashboard2__myWatchlist__content__heading-price">
              price
            </div>
            <div className="dashboard2__myWatchlist__content__heading-prevClose">
              prev Close
            </div>
            <div className="dashboard2__myWatchlist__content__heading-high">
              high
            </div>
            <div className="dashboard2__myWatchlist__content__heading-low">
              low
            </div>
            <div className="dashboard2__myWatchlist__content__heading-Market">
              Market
            </div>
            <div className="dashboard2__myWatchlist__content__heading-volume">
              volume
            </div>
            <div className="dashboard2__myWatchlist__content__heading-avgvolume">
              avg. volume
            </div>
            <div className="dashboard2__myWatchlist__content__heading-tumover">
              tumover
            </div>
            <div className="dashboard2__myWatchlist__content__heading-range">
              range
            </div>
            <div className="dashboard2__myWatchlist__content__heading-turn">
              turn
            </div>
          </div>
        </div>
        <MyWatchlistCard />
        <MyWatchlistCard />
        <MyWatchlistCard />
        <MyWatchlistCard />
      </section>
    </div>
  );
}

export default MyWatchlist;
