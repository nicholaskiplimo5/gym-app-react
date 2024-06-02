import React from "react";
import Header from "./Header";
import img from "../assets/hero_image.png";
import calories from "../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Lets help you to shape and build your ideal body and live up to
              your life for the fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
    
              +145</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+989</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+45</span>
            <span>Fitness Programs</span>
          </div>
        </div>
        <div className="hero-button">
          <button className="btn">Get started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <img src={img} alt="" className="hero-image" />

        <div className="calories">
          <img src={calories} alt="calories logo" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
