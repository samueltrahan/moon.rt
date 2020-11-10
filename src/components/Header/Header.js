import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

export default function Header() {

  let linkContainer = document.getElementsById('section-header');

  let btns = linkContainer.getElementsByClassName('section-links');

  for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    })
  }


  return (
    <nav id="section-header">
      <Link role="button" className="section-links" to="/intro">Introduction</Link>
      <Link role="button" className="section-links active" to="/first">First Section</Link>
      <Link role="button" className="section-links" to="/second">Second Section</Link>
      <Link role="button" className="section-links" to="/getstarted">Get Started</Link>
    </nav>
  )
}
