import React from "react";
import { Line } from "react-chartjs-2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TimelineIcon from "@mui/icons-material/Timeline";
import "./sass/Statistics.scss";
import { IconButton } from "@mui/material";

function Statistics() {
  const dataS = (canvas) => {
    const ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(200, 0, 210, 200);
    gradient.addColorStop(0.01, "#f8832a");
    gradient.addColorStop(0.65, "#342b2600");
    return {
      labels: [10, 20, 50, 70, 88, 60, 50, 10, 20, 60, 70, 88, 60, 50],
      datasets: [
        {
          data: [10, 20, 60, 70, 88, 60, 50, 10, 20, 60, 70, 88, 60, 50],
          fill: true,
          backgroundColor: gradient,
          borderColor: "#f8832a",
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
    <div className="dashboard3__Statistics">
      <header>
        <h2 className="dashboard3__Statistics__heading">Statistics</h2>
      </header>
      <section>
        <div className="dashboard3__Statistics__price">
          <div className="dashboard3__Statistics__priceBanner">
            <img src="/images/bitcoinIcon.png" alt="" />
            <p>Bitcoin</p>
            <IconButton>
              <KeyboardArrowDownIcon style={{ color: "white" }} />
            </IconButton>
          </div>
          <p>
            $ 43,577.00 <span style={{ color: "rgb(0, 255, 0)" }}>+0.23%</span>
            <TimelineIcon
              style={{
                marginLeft: "5px",
                fontSize: "0.9rem",
                color: "rgb(0, 255, 0)",
              }}
            />
          </p>
        </div>
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
                  // display: false,
                  ticks: {
                    // stepSize: 2,
                  },
                },
                y: {
                  // display: false,
                  ticks: {
                    // stepSize: 10000,
                  },
                },
              },
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Statistics;
