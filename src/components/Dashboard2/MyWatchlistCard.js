import React from "react";
import "./sass/MyWatchlistCard.scss";

function MyWatchlistCard() {
  return (
    <div className="dashboard2__myWatchlistCard">
      <div className="dashboard2__myWatchlistCard-nameNsym">
        <div className="dashboard2__myWatchlistCard-symbol">symbol</div>
        <div className="dashboard2__myWatchlistCard-name">name</div>
      </div>

      <div className="dashboard2__myWatchlistCard-data">
        <div className="dashboard2__myWatchlistCard-sparkline">sparkline</div>
        <div className="dashboard2__myWatchlistCard-change">change</div>
        <div className="dashboard2__myWatchlistCard-price">price</div>
        <div className="dashboard2__myWatchlistCard-prevClose">prev Close</div>
        <div className="dashboard2__myWatchlistCard-high">high</div>
        <div className="dashboard2__myWatchlistCard-low">low</div>
        <div className="dashboard2__myWatchlistCard-Market">Market</div>
        <div className="dashboard2__myWatchlistCard-volume">volume</div>
        <div className="dashboard2__myWatchlistCard-avgvolume">avg. volume</div>
        <div className="dashboard2__myWatchlistCard-tumover">tumover</div>
        <div className="dashboard2__myWatchlistCard-range">range</div>
        <div className="dashboard2__myWatchlistCard-turn">turn</div>
      </div>
    </div>
  );
}

export default MyWatchlistCard;
