import React from "react";
import { Link } from "react-router-dom";
import "./SectionTwo.css";

export default function SectionTwo() {
  return (
    <div id="second-section">
      <div className="header-two">
        <h1 className="header-two-title">Ipsum consequat</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          facere dolorem consequuntur quas temporibus animi nostrum. Corrupti
          voluptates et iusto?
        </p>
      </div>
      <div className="board">
        <div id="etiam">
          <i className="fas fa-network-wired fa-3x"></i>
          5,120
          <br />
          Etiam
        </div>
        <div id="magna">
          <i className="far fa-folder-open fa-3x"></i>
          8,192
          <br />
          Magna
        </div>
        <div id="tempus">
          <i className="fas fa-signal fa-3x"></i>
          2,048
          <br />
          Tempus
        </div>
        <div id="aliquam">
          <i className="fas fa-laptop fa-3x"></i>
          4,096
          <br />
          Aliquam
        </div>
        <div id="nullam">
          <div>
            <i className="fal fa-gem fa-3x"></i>
          </div>
          1,024
          <br />
          Nullam
        </div>
      </div>
      <div className="paragraph">
        <p className="part-one">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam similique
          natus quaerat ducimus beatae. Quia, tenetur, maiores praesentium illum
          explicabo labore quisquam ea at quam aliquam iusto eligendi voluptas
          sapiente.
        </p>
        <p className="part-two">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quos
          debitis possimus libero in temporibus odit suscipit ullam repellat
          itaque est incidunt officia inventore voluptatum eaque qui, nam
          nesciunt eum.
        </p>
      </div>
      <Link role="button" to="/explore" id="section-two-btn">
        Learn More
      </Link>
    </div>
  );
}
