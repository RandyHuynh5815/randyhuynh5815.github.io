import React from "react";
import './portfolio.scss'
import { portfolio } from './../../data'

export default function Portfolio() {
  return (
    <div className="portfolio" id='portfolio'>
      <div className="portfolioContainer">
        <h1>Portfolio</h1>
        <div className="itemContainer">
          {
            portfolio.map((item) => (
              <a className="item" href={item.link} id={item.id}>
                <img src={item.img} alt=""></img>
                <h3>{item.title}</h3>
              </a>
            ))
          }
        </div>
      </div>
      <a href="#works" id="arrow">
        <img src="assets/down.png" alt=""></img>
      </a>
    </div>
  )
}
