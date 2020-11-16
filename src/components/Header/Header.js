import React from "react";
import "./Header.css";

export default function Header() {
  let btns = document.getElementsByClassName("section-links");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  return (
    <nav className="section-header">
      <a role="button" className="section-links active" href="#intro">
        Introduction
      </a>
      <a role="button" className="section-links" href="#first-section">
        First Section
      </a>
      <a role="button" className="section-links" href="#second-section">
        Second Section
      </a>
      <a role="button" className="section-links" href="#getstarted">
        Get Started
      </a>
    </nav>
  );
}
