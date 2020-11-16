import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="cinque">
        <h2><a className="footer-title" href="https://www.cinquewb.com">Cinque Web Development</a></h2>
        <p>
          Our team of web developers are here to help you transform your
          business website. Our experience with users and eye for design is what
          sets up apart from other development companies. Try out our template
          and see how easy it is to get started building your our website.
        </p>
        <Link className="footer-btn" to="/explore" role="button">Learn More</Link>
      </div>
      <div className="cinque-biz">
        <div className="info">
        <h2>Find Us</h2>
        <h4>Address: &nbsp;&nbsp;&nbsp;&nbsp; Dallas, Tx</h4>
        <h4>Phone: &nbsp;&nbsp;&nbsp;&nbsp; <a className="contact-link" href="tel:1-337-909-9418">(337) 909- 9418</a></h4>
        <h4>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a className="contact-link" href="mailto:cinquewebdev@gmail.com">cinquewebdev@gmail.com</a></h4>
        </div>
        <div className="social-section">
          <a className="social-links" href="https://github.com/Cinque-Web-Development"><i className="fab fa-github fa-2x"></i></a>
          <a className="social-links" href="https://twitter.com/cinquewebdev"><i className="fab fa-twitter fa-2x"></i></a>
          <a className="social-links" href="https://www.linkedin.com/company/cinque-web-dev"><i className="fab fa-linkedin fa-2x"></i></a>
        </div>
      </div>
    </div>
  );
}
