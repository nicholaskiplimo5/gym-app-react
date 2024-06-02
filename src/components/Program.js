import React from "react";
import "../custom/program.css";
import rightArrow from '../assets/rightArrow.png'
import { programData } from "../data/programData";

const Program = () => {
  return (
    <div className="programs" id="program">
      <div className="programs-header">
        <span className="stroke-text">Explore our </span>
        <span>programs </span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="programs-categories">
        {programData.map((program) => [
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span><img src={rightArrow} alt="" /></div>
          </div>
        ])}
      </div>
    </div>
  );
};

export default Program;
