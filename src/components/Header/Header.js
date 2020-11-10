import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <nav className="section-header">
      <Link role="button" className="section-links" to="/intro">Introduction</Link>
      <Link role="button" className="section-links" to="/first">First Section</Link>
      <Link role="button" className="section-links" to="/second">Second Section</Link>
      <Link role="button" className="section-links" to="/getstarted">Get Started</Link>
    </nav>
  )
}
