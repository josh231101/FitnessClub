import React from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import Navbar from "../../components/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <header class="mainHeader">
        <div class="mainHeader__wrapper">
          <h1>
            STEP UP YOUR
            <br />
            <span>FITNESS CHALLENGE</span>
            <br />
            WITH US
          </h1>
        </div>
      </header>
    </>
  );
};

export default Home;
