import React, { useEffect, useState } from "react";
import "./sass/ProgressCircle.scss";

function ProgressCircle(props) {
  const { progressVal, progressColor } = props;
  const [val, setVal] = useState(progressVal);
  const progressSpinnerStyle = {
    background: `conic-gradient(${progressColor} ${val}%,#2b2e38 ${val}%)`,
  };
  useEffect(() => {
    (() => {
      setVal(progressVal);
    })();
  }, [progressVal]);

  return (
    <div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div id="middle-circle">{val}%</div>
          <div id="progress-spinner" style={progressSpinnerStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressCircle;
