import React, { useEffect, useRef } from "react";
import './intro.scss'
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Data Science", "Artificial Intelligence", "Machine Learning", "Web Development", "Computer Science Education"]
    })
  }, [])

  return (
    <div className="intro" id='intro'>
      <div className="text">
        <h2>Hello, my name is</h2>
        <h1>Randy Huynh</h1>
        <h3>And I want to explore</h3>
        <span ref={textRef}></span>
      </div>
      <a href="#about">
        <img src="assets/down.png" alt=""></img>
      </a>
    </div>
  )
}
