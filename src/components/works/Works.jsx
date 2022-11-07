import React from "react";
import { Chrono } from "react-chrono";
import { work } from "../../data";
import './works.scss'


export default function Works() {
  const dates = work.map((item) => {return {title: item.title}})

  return (
    <div className="works" id="works">
      <h1 id="title">Work Experience</h1>
      <div className="timeline">
        <Chrono mode="HORIZONTAL" items={dates} theme={{primary: "#2a1e5c", secondary: "#ffca3a"}}>
          {work.map((item) => (
            <div className="container">
              <div className="timelineItem">
                <div className="left">
                  <div className="leftContainer">
                    <h2>{item.cardTitle}</h2>
                    <h3>{item.cardSubtitle}</h3>
                    <p>{item.cardDetailedText}</p>
                    {item.link ? <a href={item.link}>Learn More</a> : <span></span>}
                  </div>
                </div>
                <div className="right">
                  <div className="imgContainer">
                    <img src={item.image} alt={item.alt}></img>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Chrono>
      </div>
      <a href="#contact" id="arrow">
        <img src="assets/down.png" alt=""></img>
      </a>
    </div>
  )
}
