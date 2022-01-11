import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";

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
      window.removeEventListener('resize', changeWidth)
  }
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className={style.list}>
          <li className={style.items}>About Me</li>
          <li className={style.items}>My Projects</li>
          <li className={style.items}>Contact Me</li>
        </ul>
      )}
      <button className={style.btn} onClick={toggleNav}>
        BTN
      </button>
    </nav>
  );
};

export default Navbar;
