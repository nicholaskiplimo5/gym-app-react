import React from "react";
import "../custom/plans.css";
import { plansData } from "../data/plansData";
import wtick from "../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur"></div>
      <div className="blur plans-blur1"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      <div className="plans">
        {plansData.map((plan) => (
          <div className="plan" key={1}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature) => (
                <div className="feature">
                  <img src={wtick} alt="" />
                  <span key={1}>  {feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See More Benefits </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
