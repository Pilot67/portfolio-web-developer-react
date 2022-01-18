import React, { useState, useEffect } from "react";
import style from "../css/Navbar.module.css";
const hamburgerIcon = require("../images/hamburger.png");

const Navbar = ({ handlePageChange, currPage }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  };

  const handleMenuClick = (page) => {
    setToggleMenu(false);
    handlePageChange(page);
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
    <header className={style.header}>
      <div className={style.menubar}>
        <h2 className={style.logo}>
          <a
            className={style.itemsUnselected}
            href="#home"
            onClick={() => handleMenuClick("Home")}
          >
            SimmonsOne
          </a>
        </h2>
        {(toggleMenu || screenWidth > 767) && (
          <ul className={style.list}>
            <li className={style.items}>
              <a
                className={
                  currPage === "Home"
                    ? style.itemsSelected
                    : style.itemsUnselected
                }
                href="#home"
                onClick={() => handleMenuClick("Home")}
              >
                About Me
              </a>
            </li>
            <li className={style.items}>
              <a
                className={
                  currPage === "Projects"
                    ? style.itemsSelected
                    : style.itemsUnselected
                }
                href="#projects"
                onClick={() => handleMenuClick("Projects")}
              >
                Projects
              </a>
            </li>
            <li className={style.items}>
              <a
                className={
                  currPage === "Contact"
                    ? style.itemsSelected
                    : style.itemsUnselected
                }
                href="#contact"
                onClick={() => handleMenuClick("Contact")}
              >
                Contact Me
              </a>
            </li>
            <li className={style.items}>
              <a
                className={
                  currPage === "Resume"
                    ? style.itemsSelected
                    : style.itemsUnselected
                }
                href="#resume"
                onClick={() => handleMenuClick("Resume")}
              >
                Resume
              </a>
            </li>
          </ul>
        )}
        <button className={style.btn} onClick={toggleNav}>
          <img className={style.hamburger} src={hamburgerIcon} alt={""} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
