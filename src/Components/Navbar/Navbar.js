import React, { useState, useEffect } from "react";
import style from "../css/Navbar.module.css";
const hamburgerIcon = require("../images/hamburger.png")

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header>
      {(toggleMenu || screenWidth > 639) && (
        <ul className={style.list}>
          <li className={style.items}>About Me</li>
          <li className={style.items}>My Projects</li>
          <li className={style.items}>Contact Me</li>
          <li className={style.items}>Resume</li>
        </ul>
      )}
      <button className={style.btn} onClick={toggleNav}>
        <img className={style.hamburger} src={hamburgerIcon} alt={""}/>
      </button>
    </header>
  );
};

export default Navbar;
