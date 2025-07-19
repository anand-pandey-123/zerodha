import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        ></img>
        <h1 className="mt-5">Invest in Everything</h1>
        <p>
          Online Platform to invest in stocks, derivatives, mutual funds, nad
          more
        </p>
        <Link to={"/signup"}>
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
