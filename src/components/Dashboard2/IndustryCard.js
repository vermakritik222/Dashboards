import React from "react";
import "./sass/IndustryCard.scss";

function IndustryCard() {
  return (
    <div className="dashboard2__industryCard">
      <h2 className="dashboard2__industryCard__heading">Banking Services</h2>
      <section className="dashboard2__industryCard__content">
        <h2>+0.12%</h2>
        <div className="dashboard2__industryCard__content__Bar">
          <div className="dashboard2__industryCard__content__bar-left"></div>
          <div className="dashboard2__industryCard__content__bar-right"></div>
        </div>
        <section className="dashboard2__industryCard__contentList">
          <div className="dashboard2__industryCard__contentItem">
            <div className="dashboard2__industryCard__contentItem-name">
              AAPl
            </div>
            <div className="dashboard2__industryCard__contentItem-Profit">
              +0.44
            </div>
          </div>
          <div className="dashboard2__industryCard__contentItem">
            <div className="dashboard2__industryCard__contentItem-name">
              GOOG
            </div>
            <div className="dashboard2__industryCard__contentItem-Profit">
              +12.44
            </div>
          </div>
          <div className="dashboard2__industryCard__contentItem">
            <div className="dashboard2__industryCard__contentItem-name">
              GOOG
            </div>
            <div className="dashboard2__industryCard__contentItem-loss">
              -2.89
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default IndustryCard;
