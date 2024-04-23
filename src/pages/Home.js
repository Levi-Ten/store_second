import React from "react";
import Header from "../components/Header";
import girl from "../images/girl.png";

function Home() {
  return (
    <>
      <Header />
      <div className="main__page">
        <div className="page__content">
          <div className="desc">
            <p className="desc__subtitle">In this season, find the best 🔥</p>
            <h1 className="desc__title">Exclusive collection for everyone</h1>
            <p className="desc__text">Discover more. <span className="desc__slogan">Good things are waiting for you</span></p>
          </div>
        </div>
        <div className="main__picture">
          <img src={girl} alt="girl"></img>
        </div>
      </div>
    </>
  );
}

export default Home;
