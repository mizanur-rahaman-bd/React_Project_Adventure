import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="Banner">
        <div className="container">
            <div className="bannerHeading">
                <h1>Experience The Spirit Of
                Adventure Sports</h1>
            </div>
            <div className="bannerButton">
                <button>Explore Activities</button>
                <button>Who We Are</button>
            </div>
        </div>
        <div className="bannerBottom">
            <img src="Images/bannerbottom.png" alt="bannerbottom" />
        </div>
      </div>
    </>
  );
};

export default Banner;
