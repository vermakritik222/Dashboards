import React from "react";
import "./sass/MyPortfolioCard.scss";

function MyPortfolioCard(props) {
  const { img, name, subname } = props;
  return (
    <div className="dashboard3__myPortfolioCard">
      <div className="dashboard3__myPortfolio__img">
        <img src={img} alt="" />
      </div>
      <div className="dashboard3__myPortfolio__content">
        <div className="dashboard3__myPortfolio__left">
          <p>{name}</p>
          <p>{subname}</p>
        </div>
        <div className="dashboard3__myPortfolio__right">
          <p>BTC 0,01284736</p>
          <p>$123,456</p>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolioCard;
