import React from "react";
import { Line } from "react-chartjs-2";
import IndexCharCard from "./IndexCharCard";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import "./sass/IndexChart.scss";
import { IconButton } from "@mui/material";

function IndexChart() {
  const dataS = (canvas) => {
    // const ctx = canvas.getContext("2d");
    // let gradient = ctx.createLinearGradient(0, 0, 300, 300);
    // gradient.addColorStop(0, "red");
    // gradient.addColorStop(0.23, "rgb(255, 255, 255)");
    return {
      labels: [
        1, 2, 3, 4, 5, 6, 5, 7, 7, 8, 9, 12, 3, 3, 4, 5, 3, 66, 7, 4, 7, 88, 6,
        8,
      ],
      datasets: [
        {
          data: [
            1, 2, 3, 4, 5, 6, 5, 7, 7, 8, 9, 12, 3, 3, 4, 5, 3, 66, 7, 4, 7, 88,
            6, 8,
          ],
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
        {
          data: [
            1, 3, 5, 6, 7, 34, 8, 43, 96, 43, 1, 2, 23, 4, 23, 5, 72, 3, 85, 3,
            43, 65, 32,
          ],
          fill: true,
          //   backgroundColor: gradient,
          borderColor: "greenyellow",
          borderWidth: 2,
          borderCapStyle: "butt",
          pointBorderWidth: 2,
          pointHoverRadius: 3,
          pointRadius: 1,
          spanGaps: false,
        },
        {
          data: [
            43, 65, 32, 23, 5, 72, 3, 85, 3, 43, 65, 6, 7, 34, 8, 23, 4, 32, 43,
            96, 43, 1, 2,
          ],
          fill: true,
          //   backgroundColor: gradient,
          borderColor: "blue",
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
    <div className="dashboard2__IndexChart">
      <div className="dashboard2__IndexChart__heading__bar">
        <h2 className="dashboard2__IndexChart__heading">Index Chart</h2>
        <IconButton style={{ borderRadius: "50%", height: "max-content" }}>
          <SettingsOutlinedIcon style={{ color: "#4a556e" }} />
        </IconButton>
      </div>
      <div className="dashboard2__IndexChartMain">
        <div className="dashboard2__IndexChartMain-left">
          <IndexCharCard color={"blue"} />
          <IndexCharCard color={"red"} />
          <IndexCharCard color={"greenyellow"} />
        </div>
        <div className="dashboard2__IndexChartMain-right">
          <Line
            // ref={chartRef}
            height={100}
            // width={600}
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
                  display: true,
                  ticks: {
                    // stepSize: 10000,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default IndexChart;
