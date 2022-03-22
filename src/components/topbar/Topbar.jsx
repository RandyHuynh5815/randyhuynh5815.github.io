import React from "react";
import './topbar.scss'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">RH</a>
        </div>
        <div className="right">
          <a href="#about" className="link">About</a>
          <a href="#portfolio" className="link">Portfolio</a>
          <a href="#works" className="link">Work Experience</a>
          <a href="#contact" className="link">Contact</a>
        </div>
      </div>
    </div>
  )
}
