import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact">
        <h1>Where to find me</h1>
        <h4>Interested in doing a project together?</h4>
        <p>Or if you have questions...</p>
      </div>
      <div className="contact__info">
        <a className="contact__info__link" href="https://github.com/gnyokota">
          <AiFillGithub className="contact__info__icons" />
          Check my GitHub
        </a>
        <a
          className="contact__info__link"
          href="https://www.linkedin.com/in/gyokota"
        >
          <AiFillLinkedin className="contact__info__icons" />
          Send Me a Message
        </a>
        <a className="contact__info__link" href="mailto: gnyokota@gmail.com">
          <AiTwotoneMail className="contact__info__icons" />
          Email Me
        </a>
      </div>
      <p className="contact__attribution">
        Developed by{" "}
        <a
          className="contact__attribution__link"
          href="https://www.linkedin.com/in/gyokota/"
        >
          Giovana Yokota
        </a>
      </p>
    </div>
  );
};

export default Contact;
