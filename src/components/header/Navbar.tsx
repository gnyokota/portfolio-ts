import React, { useState } from "react";
import { HiViewList } from "react-icons/hi";
import Drawer from "./Drawer";

import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setIsOpen((prevState: boolean) => !prevState);
  };

  const handleBackdrop = () => {
    setIsOpen(false);
  };

  return (
    <header id="navbar">
      <nav className="navbar">
        <a href="#profile" className="navbar__logo">
          <h1 className="navbar__logo__title">{"<GY/>"}</h1>
        </a>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#about" className="navbar__item__link">
              About
            </a>
          </li>
          <li className="navbar__item">
            <a href="#skills" className="navbar__item__link">
              Expertise
            </a>
          </li>
          <li className="navbar__item">
            <a href="#projects" className="navbar__item__link">
              Projects
            </a>
          </li>
          <li className="navbar__item">
            <a href="#contact" className="navbar__item__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div aria-hidden="true" onClick={handleDrawerToggle}>
        <HiViewList className="navbar__icon" />
      </div>
      <div className="navbar__drawer">
        {isOpen && <Drawer handleBackdrop={handleBackdrop} />}
      </div>
    </header>
  );
};

export default Navbar;
