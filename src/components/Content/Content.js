import React from 'react';
import {Link} from 'react-router-dom';
import './Content.css';
import Pic02 from '../../Assets/circle.png';

export default function Content() {
  return (
  <div id="intro">
    <div className="explore">
      <h1 className="explore-title">Explore our world</h1>
      <p>Welcome to Moon, come explore our world of development. This template will take your business or portfolio to the next level!</p>
      <Link role="button" to="/explore" className="learn-more-btn">Learn More</Link>
    </div>
    <div className="content-picture">
    <img alt="" className="picture" src={Pic02}/>
    </div>
  </div>

  )
}
