import React from "react";
import "./Section.css";
import Header from "../Header/Header";
import Content from "../Content/Content";

export default function Section() {
  return (
    <>
    <div className="section-comp">
      <div >
        <Header />
      </div>
      <div className="content">
      <Content />
      </div>
    </div>
    </>
  );
}
