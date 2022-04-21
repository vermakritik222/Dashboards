import React from "react";
import "../Dashboard4/sass/Card.scss";

function Card(props) {
  const { Title, Amount, Progress, AddAmount, Color } = props;
  return (
    <div className="dashboard4_Card">
      <div className="header">
        <p>{Title}</p>
      </div>
      <div className="mid">
        <h2>
          <span>$</span>
          {Amount}
        </h2>
        <p>+{AddAmount}%</p>
      </div>
      <div className="bar">
        <div style={{ background: Color, width: Progress }}></div>
      </div>
    </div>
  );
}

export default Card;
