import React from "react";
import "./sass/StatusBarCard.scss";
import ProgressCircle from "./ProgressCircle";
function StatusBarCard(props) {
  const { Title, Amount, ProgressVal, Color } = props;
  return (
    <div className="Dashboard4_StatusBarCard">
      <div className="cover">
        <div className="sec1">
          <p>{Title}</p>
          <h3>
            <span>$</span> {Amount}
          </h3>
        </div>
        <div className="sec2">
          <ProgressCircle progressVal={ProgressVal} progressColor={Color} />
        </div>
      </div>
    </div>
  );
}

export default StatusBarCard;
