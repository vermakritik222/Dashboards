import React from "react";
import { Line } from "react-chartjs-2";
import "./sass/Graph.scss";

function Graph() {
  const dataS = (canvas) => {
    const ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(150, 0, 150, 440);
    gradient.addColorStop(0.01, "#f3799e");
    gradient.addColorStop(0.65, "#342b2600");
    return {
      labels: [10, 20, 50, 70, 88, 60, 50, 10, 20, 60, 70, 88, 60, 50],
      datasets: [
        {
          data: [10, 20, 60, 70, 88, 60, 50, 25, 20, 60, 70, 88, 60, 50],
          fill: true,
          backgroundColor: gradient,
          borderColor: "#f3799e",
          // borderWidth: 2,
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
    <div className="Dashboard4_Graph">
      <div className="header">
        <div>
          <div></div>
          <p>income</p>
        </div>
        <div>
          <div></div>
          <p>expense</p>
        </div>
      </div>
      <div className="Graph">
        <Line
          data={dataS}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            // responsive: true,
            maintainAspectRatio: false,
            // indexAxis: "x",
          }}
        />
      </div>
    </div>
  );
}

export default Graph;
