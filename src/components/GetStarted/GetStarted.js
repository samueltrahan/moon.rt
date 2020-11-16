import React from 'react';
import {Link} from 'react-router-dom';
import './GetStarted.css';

export default function GetStarted() {
  return (
    <div id="getstarted" className="get-started-sect">
      <h1 className="get-started-title">Get Started</h1>
      <p className="started-sentence">Click the buttons to learn more or to get started building the website to take your business to the next level!</p>
      <div className="buttons">
      <Link className="started-btn" role="button" to="/started">Get Started</Link>
      <Link className="learn-more-btn" role="button" to="/explore">Learn More</Link>
      </div>
    </div>
  )
}
