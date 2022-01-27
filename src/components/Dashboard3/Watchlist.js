import React from "react";
import "./sass/Watchlist.scss";
import WatchlistCard from "./WatchlistCard";

function Watchlist() {
  return (
    <div className="dashboard3__watchlist">
      <header>
        <h2 className="dashboard3__watchlist__heading">watchlist</h2>
      </header>

      <section>
        <WatchlistCard
          name="bitcoin"
          subname="btc"
          img="/images/bitcoinIcon.png"
        />
        <WatchlistCard
          name="ethereum"
          subname="eth"
          img="/images/ethereum_image.png"
        />
        <WatchlistCard
          name="Litecoin"
          subname="ltc"
          img="/images/Litecoin-Crypto-Logo-PNG-Clipart.png"
        />
        {/* <WatchlistCard
          name="ethereum"
          subname="eth"
          img="/images/ethereum_image.png"
        />
        <WatchlistCard
          name="ethereum"
          subname="eth"
          img="/images/ethereum_image.png"
        />
        <WatchlistCard
          name="ethereum"
          subname="eth"
          img="/images/ethereum_image.png"
        /> */}
      </section>
    </div>
  );
}

export default Watchlist;
