import React from 'react';
import './about.scss';

export default function About() {
  return (
    <div className='about' id='about'>
      <div className="left">
        <div className='imageContainer'>
          <img src="assets/left_img.jpg"></img>
        </div>
      </div>
      <div className="middle">
        <div className='textContainer'>
          <h2>About Me</h2>
            <p>
              I am a second year student studying computer science at the University of California, Irvine with
              interests in computer science and mathematics.
              As of right now, I am working as an undergraduate researcher for Professor Theodore van Erp and
              Professor Michael Shindler. I am also a front-end developer for the ICS Student Council, and a
              mentor for Artificial Intelligence at UCI. My works touch upon the fields of artificial intelligence, 
              machine learning, data science, web development and computer science education.
            </p>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt=""></img>
        </a>
      </div>
      <div className="right">
        <div className='imageContainer'>
          <img src="assets/right_img.jpg"></img>
        </div>
      </div>
    </div>
  )
}
