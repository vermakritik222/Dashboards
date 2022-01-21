import { Button } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./css/Banner.css";
function Banner(props) {
  const { poster, season, title } = props;
  return (
    <div className="dashboard1__banner">
      <div className="dashboard1__banner__cover">
        <img src={poster} alt="" />
        <div className="dashboard1__banner__Season">{`Season ${season}`}</div>
        <div className="dashboard1__banner__title">{title}</div>

        <Button
          className="dashboard1__banner__btn"
          variant="contained"
          startIcon={<PlayArrowIcon fontSize="large" />}
          color="error"
        >
          watch now
        </Button>
      </div>
    </div>
  );
}

export default Banner;
