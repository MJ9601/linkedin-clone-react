import React from "react";
import "./AsideRight.css";

const AsideRight = () => {
  const news = (headline, details) => (
    <div className="right__news">
      <h1>
        <div className="right__newsTag"></div>
        <span className="right__newsHeadline">{headline}</span>
      </h1>
      <p className="right__newsDetails">{details}</p>
    </div>
  );
  const _news = [];
  for (let index = 0; index < 5; index++) {
    _news[index] = news(
      "Covid 19",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nam."
    );
  }
  return (
    <div className="asideright">
      <div className="right__container">
        <h3 className="right__headline">News section</h3>
        <div className="right__newsSection">{_news.map((news) => news)}</div>
      </div>
    </div>
  );
};

export default AsideRight;
