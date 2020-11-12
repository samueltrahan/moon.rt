import React from 'react';
import './SectionTwo.css';

export default function SectionTwo() {
  return (
    <div id="second-section">
      <div className="header-two">
      <h1>Ipsum consequat</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere dolorem consequuntur quas temporibus animi nostrum. Corrupti voluptates et iusto? 
      </p>
      </div>
      <div className="board">
        <div id="etiam">
          <i className="fas fa-network-wired fa-3x"></i>
          Etiam
        </div>
        <div id="magna">
          <i className="far fa-folder-open fa-3x"></i>
          Magna
          </div>
        <div id="tempus">
          <i className="fas fa-signal fa-3x"></i>
          Tempus
          </div>
        <div id="aliquam">
          <i className="fas fa-laptop fa-3x"></i>
          Aliquam
          </div>
        <div id="nullam">
        <div><i className="fal fa-gem fa-3x"></i></div>
          Nullam
          </div>
      </div>
    </div>
  )
}
