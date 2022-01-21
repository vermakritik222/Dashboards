import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./css/Card1.css";

function Card1(props) {
  const { large, poster, seasons, rating, title } = props;
  return (
    <div
      className={
        large
          ? "dashboard1__card1 dashboard1__card1__large"
          : "dashboard1__card1"
      }
    >
      <div className="dashboard1__card1__cover">
        <div
          className={
            large
              ? "dashboard1__card1__img dashboard1__card1__img__large"
              : "dashboard1__card1__img"
          }
        >
          <img
            src={poster}
            alt=""
            //   className="dashboard1__card1__img"
          />
        </div>
        <div className="dashboard1__card1__content">
          <div className="dashboard1__card1__sec1">
            <div className="dashboard1__card1__rating">
              <StarIcon fontSize="small" style={{ color: "yellow" }} />
              <span className="dashboard1__card1__ratingnum">{rating}</span>
            </div>
            <div className="dashboard1__card1__sec1__season">{`Seasons ${seasons}`}</div>
          </div>
        </div>
        <div className="dashboard1__card1__name">{title}</div>
      </div>
    </div>
  );
}

export default Card1;
