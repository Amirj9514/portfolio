import React from "react";
import { useState } from "react";
import "./gallary.css";
// import All from "./All/all";
import Wedding1 from "./wedding1/wedding1";
import Wedding2 from "./wedding2/wedding2";
import Kids from "./kids/kids";
import Dagree from "./dagree/dagree";

import Portraits from "./Portraits/portraits";
import Other from "./other/Other";
import Dolki from "./dolki/Dolki";
import Footer from "../footer/footer";
import Random from "./random/random";

import { RiEmotionSadLine } from "react-icons/ri";

const Gallary = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="portfolio section-show">
        <div className="container d-flex justify-content-center align-items-center text-warning">
          <span>
            <RiEmotionSadLine size={30}/>
          </span>
          <span className="ps-3" >
            Due to the privacy of my clients, I cannot post all of my work here
            so contact us to view full portfolio
          </span>
        </div>
      </section>
      <section id="portfolio" className="portfolio section-show mt-1">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  onClick={() => {
                    toggleTab(1);
                  }}
                  className={toggleState === 1 ? "filter-active" : ""}
                >
                  ibrahim & Saba Wedding
                </li>
                <li
                  onClick={() => {
                    toggleTab(2);
                  }}
                  className={toggleState === 2 ? "filter-active" : ""}
                >
                  mohsin & saba Wedding
                </li>
                <li
                  onClick={() => {
                    toggleTab(9);
                  }}
                  className={toggleState === 9 ? "filter-active" : ""}
                >
                  dholki night
                </li>

                <li
                  onClick={() => {
                    toggleTab(4);
                  }}
                  className={toggleState === 4 ? "filter-active" : ""}
                >
                  Kids
                </li>
                <li
                  onClick={() => {
                    toggleTab(5);
                  }}
                  className={toggleState === 5 ? "filter-active" : ""}
                >
                  Graduation
                </li>

                <li
                  onClick={() => {
                    toggleTab(7);
                  }}
                  className={toggleState === 7 ? "filter-active" : ""}
                >
                  Portraits
                </li>
                <li
                  onClick={() => {
                    toggleTab(3);
                  }}
                  className={toggleState === 3 ? "filter-active" : ""}
                >
                  RANDOM CLICKS
                </li>
                <li
                  onClick={() => {
                    toggleTab(8);
                  }}
                  className={toggleState === 8 ? "filter-active" : ""}
                >
                  Other
                </li>
              </ul>
            </div>
          </div>
          <div className={toggleState === 1 ? "d-block row" : "d-none"}>
            <Wedding2 />
          </div>
          <div className={toggleState === 2 ? "d-block row" : "d-none"}>
            <Wedding1 />
          </div>
          <div className={toggleState === 4 ? "d-block row" : "d-none"}>
            <Kids />
          </div>
          <div className={toggleState === 5 ? "d-block row" : "d-none"}>
            <Dagree />
          </div>
          <div className={toggleState === 7 ? "d-block row" : "d-none"}>
            <Portraits />
          </div>
          <div className={toggleState === 9 ? "d-block row" : "d-none"}>
            <Dolki />
          </div>
          <div className={toggleState === 3 ? "d-block row" : "d-none"}>
            <Random />
          </div>
          <div className={toggleState === 8 ? "d-block row" : "d-none"}>
            <Other />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Gallary;
