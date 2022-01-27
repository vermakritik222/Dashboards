import React from "react";
import MyPortfolioCard from "./MyPortfolioCard";
import "./sass/MyPortfolio.scss";
function MyPortfolio() {
  return (
    <div className="dashboard3__myPortfolio">
      <header>
        <h2 className="dashboard3__myPortfolio__heading">my Portfolio</h2>
      </header>

      <section>
        <MyPortfolioCard
          name="bitcoin"
          subname="btc"
          img="/images/bitcoinIcon.png"
        />
        <MyPortfolioCard
          name="Litecoin"
          subname="ltc"
          img="/images/Litecoin-Crypto-Logo-PNG-Clipart.png"
        />
        <MyPortfolioCard
          name="ethereum"
          subname="eth"
          img="/images/ethereum_image.png"
        />
        <MyPortfolioCard
          name="Litecoin"
          subname="ltc"
          img="/images/Litecoin-Crypto-Logo-PNG-Clipart.png"
        />
        {/* <MyPortfolioCard
          name="bitcoin"
          subname="btc"
          img="/images/bitcoinIcon.png"
        /> */}
        {/* <MyPortfolioCard
          name="Litecoin"
          subname="ltc"
          img="/images/Litecoin-Crypto-Logo-PNG-Clipart.png"
        /> */}
      </section>
    </div>
  );
}

export default MyPortfolio;
