import React, { useState } from "react";
import { HiViewList } from "react-icons/hi";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";

import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleBackdrop = () => {
    setIsOpen(false);
  };

  return (
    <header id="navbar">
      <nav className="navbar">
        <Link to="#header" className="navbar__logo">
          <h1 className="navbar__logo__title">{"<GY/>"}</h1>
        </Link>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="#about" className="navbar__item__link">
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="#expertise" className="navbar__item__link">
              Expertise
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="#projects" className="navbar__item__link">
              Projects
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="#contact" className="navbar__item__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="" onClick={handleDrawerToggle}>
        <HiViewList className="navbar__icon" />
      </div>
      <div className="navbar__drawer">
        {isOpen && <Drawer handleBackdrop={handleBackdrop} />}
      </div>
    </header>
  );
};

export default Navbar;
