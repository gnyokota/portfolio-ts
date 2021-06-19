import Tilt from "react-parallax-tilt";

type Props = {
  title: string;
  description: string;
  url: string;
  code: string;
  img: string;
};

const ProjectItem = ({ title, description, url, code, img }: Props) => {
  return (
    <div id="project">
      <div className="project">
        <h3 className="project__title">{title}</h3>
        <div className="project__subtitle">
          <p>{description}</p>
        </div>
        <a href={url} className="project__live">
          See Live
        </a>
        <a href={code} className="project__code">
          Source Code
        </a>
      </div>
      <div className="project__image">
        <Tilt>
          <a href={url} className="project__image__link">
            <img src={img} alt="project__img" />
          </a>
        </Tilt>
      </div>
    </div>
  );
};

export default ProjectItem;
