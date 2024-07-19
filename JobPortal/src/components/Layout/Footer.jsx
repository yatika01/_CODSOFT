import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {  FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights By Yatika</div>
      <div>
        <Link to = {"/https://www.linkedin.com/in/yatika-kumawat/"} target="_blank"><FaLinkedin/></Link>
      </div>
    </footer>
  )
}

export default Footer;
