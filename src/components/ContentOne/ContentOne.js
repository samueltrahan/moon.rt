import React from 'react';
import './ContentOne.css';
import Pic03 from '../../Assets/first-section.png'
import Pic04 from '../../Assets/second-section.png'
import Pic05 from '../../Assets/third-section.png'

export default function ContentOne() {
  return (
    <div className="first-section">
      <h1 className="first-section-title">Aedificate</h1>
      <div className="first-section-card">
        <div className="first-card">
          <img className="circle-picture" alt="" src={Pic03}></img>
        </div>
        <div className="second-card">
        <img className="circle-picture" alt="" src={Pic04}></img>
        </div>
        <div className="third-card">
        <img className="circle-picture" alt="" src={Pic05}></img>
        </div>
      </div>
    </div>
  )
}
