import React from "react";
import './contact.scss'
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  return (
    <div className="contact" id='contact'>
      <div className="left">
        <img src="assets/shake.svg"></img>
      </div>
      <div className="right">
        <h2>Let's keep in touch</h2>
        <div className="emailContainer">
          <img src="assets/mail.png"/>
          <span>randyhuynh5815@gmail.com</span>
        </div>
        <div className="buttonRow">
          <a href="https://www.linkedin.com/in/randylhuynh/">
            <img src="assets/linkedin.png"></img>
          </a>
          <a href="https://github.com/RandyHuynh5815">
            <img src="assets/github.png"/>
          </a>
          <a href="https://randyhuynh5815.github.io/resume/">
            <img src="assets/file_icon.png"/>
          </a>
        </div>
      </div>
    </div>
  )
}
