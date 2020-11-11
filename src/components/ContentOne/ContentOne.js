import React from "react";
import {Link} from 'react-router-dom';
import "./ContentOne.css";
import Pic03 from "../../Assets/first-section.png";
import Pic04 from "../../Assets/second-section.png";
import Pic05 from "../../Assets/third-section.png";

export default function ContentOne() {
  return (
    <div className="first-section">
      <h1 className="first-section-title">Aedificate</h1>
      <div className="first-section-card">
        <div className="first-card">
          <img className="circle-picture" alt="" src={Pic03}></img>
          <p className="title">Build Your Website</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque hic
            id eligendi optio officia aspernatur deserunt.{" "}
          </p>
        </div>
        <div className="second-card">
          <img className="circle-picture" alt="" src={Pic04}></img>
          <p className="title">Documents on Build</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque hic
            id eligendi optio officia aspernatur deserunt.{" "}
          </p>
        </div>
        <div className="third-card">
          <img className="circle-picture" alt="" src={Pic05}></img>
          <p className="title">Diamond Build</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque hic
            id eligendi optio officia aspernatur deserunt.{" "}
          </p>
        </div>
        <div className="section-one-btn">
        <Link role="button" to="/explore" id="section-one-btn" >Learn More</Link>
        </div>
      </div>
    </div>
  );
}
