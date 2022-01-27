import React from "react";
import TimelineIcon from "@mui/icons-material/Timeline";
import "./sass/WatchlistCard.scss";
import { Line } from "react-chartjs-2";
function WatchlistCard(props) {
  const { img, name, subname } = props;
  const dataS = (canvas) => {
    // const ctx = canvas.getContext("2d");
    // let gradient = ctx.createLinearGradient(0, 0, 300, 300);
    // gradient.addColorStop(0, "red");
    // gradient.addColorStop(0.23, "rgb(255, 255, 255)");
    return {
      labels: [66, 7, 4, 7, 88, 6, 8],
      datasets: [
        {
          data: [50, 66, 7, 4, 7, 88, 6, 8],
          fill: true,
          //   backgroundColor: gradient,
          borderColor: "red",
          borderWidth: 2,
          borderCapStyle: "butt",
          pointBorderWidth: 2,
          pointHoverRadius: 3,
          pointRadius: 1,
          spanGaps: false,
        },
      ],
    };
  };

  return (
    <div className="dashboard3__watchlistCard">
      <div className="dashboard3__watchlistCard__header">
        <img src={img} alt="" />
        <p>
          {name} <span>{subname}</span>
        </p>
      </div>

      <div className="dashboard3__watchlistCard__content">
        <div>
          <Line
            data={dataS}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },

              responsive: true,
              maintainAspectRatio: false,
              indexAxis: "x",
              scales: {
                x: {
                  display: false,
                  ticks: {
                    stepSize: 2,
                  },
                },
                y: {
                  display: false,
                  ticks: {
                    stepSize: 10000,
                  },
                },
              },
            }}
          />
        </div>
        <div className="dashboard3__watchlistCard__contentBox">
          <p>$ 43,577.00</p>
          <p style={{ color: " rgb(0, 255, 0)" }}>
            +0.27%{" "}
            <TimelineIcon style={{ marginLeft: "10px", fontSize: "0.9rem" }} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default WatchlistCard;
