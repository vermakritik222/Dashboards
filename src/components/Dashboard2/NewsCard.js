import React from "react";
import "./sass/NewsCard.scss";

function NewsCard(props) {
  const { heading, time, content } = props;
  return (
    <div className="dashboard2__newsCard">
      <p className="dashboard2__newsCard__heading">
        {heading} - {time}
      </p>
      <p className="dashboard2__newsCard__content">{content}</p>
    </div>
  );
}

export default NewsCard;
