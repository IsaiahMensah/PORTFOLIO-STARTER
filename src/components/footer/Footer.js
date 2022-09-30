import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mensahisaiah313@gmail.com</span>
        <span>Isaiah Mensah Portfolio|Copyright 2021©</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/jjay_lynn_99/">
            <FiInstagram color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/isaiahMensah/">
            <FiFacebook color="white" size={"3rem"} />
          </a>

          <a href="https://github.com/IsaiahMensah">
            <AiFillGithub color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/isaiah-mensah-99a694232/">
            <FiLinkedin color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
