import React from 'react';
import './about.scss';

export default function About() {
  return (
    <div className='about' id='about'>
      <div className="left">
        <div className='imageContainer'>
          <img src="assets/IMG-5080.jpg"></img>
        </div>
      </div>
      <div className="middle">
        <div className='textContainer'>
          <h2>About Me</h2>
            <p>
              I am a third year student studying computer science at the University of California, Irvine with
              interests in data science, statistics and natural language processing.
              As of right now, I am working as an undergraduate researcher for
              Professor Michael Shindler. I am also a front-end developer for Hack at UCI, and a
              mentor for Artificial Intelligence at UCI. My works touch upon the fields of artificial intelligence, 
              machine learning, data science, web development, computer science education and natural language processing.
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
