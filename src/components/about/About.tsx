import { AiFillLinkedin } from "react-icons/ai";

import "./About.scss";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1>
          <strong>Who I am </strong>
        </h1>
        <h2>Web Developer based in Berlin</h2>
      </div>
      <div className="about__info">
        <div className="about__info__text">
          <h4>
            Hello, I am Giovana Yokota. A Brazilian Web Developer, currently
            based in Berlin.
            <br /> I also have a master degree in Chemical Engineering, however
            my real passions are to code and create awesome webpages for you!
            <br />
            <span>For more information check my LinkedIn.</span>
          </h4>
        </div>
        <a
          href="https://www.linkedin.com/in/gyokota"
          className="about__info__link"
        >
          <AiFillLinkedin className="about__info__icon" />
        </a>
      </div>
    </div>
  );
};

export default About;
