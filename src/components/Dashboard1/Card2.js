import React from "react";
import "./css/Card2.css";

function Card2(props) {
  const { progressBar, poster, name, duration, episode, part } = props;
  return (
    <div className="dashboard1__card2">
      <div className="dashboard1__card2__cover">
        <img src={poster} alt="" />
        <div className="dashboard1__card2__content">
          <div className="dashboard1__card2__content__heading">{name}</div>

          <div className="dashboard1__card2__content__season">
            {`Part ${part}  Episode ${episode}`}
          </div>

          <div className="dashboard1__card2__content__duration">{`${duration}m`}</div>
          {progressBar && (
            <div className="dashboard1__card2__content__progresses">
              <div style={{ width: `${progressBar}%` }}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card2;
