import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./sass/IndexCharCard.scss";
function IndexCharCard(props) {
  const { color } = props;
  return (
    <div className="dashboard2__indexChartCard">
      <div className="dashboard2__indexChartCard-left">
        <FiberManualRecordIcon style={{ color: `${color}` }} fontSize="small" />
      </div>
      <div className="dashboard2__indexChartCard-right">
        <div className="dashboard2__indexChartCard__heading">S&P 500 ETF</div>
        <p className="dashboard2__indexChartCard-left__content">
          440.74
          <span>+1.91 (0.41%)</span>
        </p>
      </div>
    </div>
  );
}

export default IndexCharCard;
