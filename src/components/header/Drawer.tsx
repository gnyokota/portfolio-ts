import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/ai";
import { FaReact } from "react-icons/fa";

import "./Drawer.scss";

type Props = {
  handleBackdrop: () => void;
};

const Drawer = ({ handleBackdrop }: Props) => {
  return (
    <div className="wrapper">
      <div className="drawer">
        <ul className="drawer__menu">
          <li className="drawer__item">
            <a href="#about" className="drawer__item__link">
              <AiOutlineHome className="drawer__item__icon" />
              About
            </a>
          </li>
          <li className="drawer__item">
            <a href="#expertise" className="drawer__item__link">
              <FaReact className="drawer__item__icon" />
              Expertise
            </a>
          </li>
          <li className="drawer__item">
            <a href="#projects" className="drawer__item__link">
              <AiOutlineFundProjectionScreen className="drawer__item__icon" />
              Projects
            </a>
          </li>
          <li className="drawer__item">
            <a href="#contact" className="drawer__item__link">
              <AiOutlineContacts className="drawer__item__icon" />
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="backdrop" onClick={handleBackdrop}></div>
    </div>
  );
};

export default Drawer;
