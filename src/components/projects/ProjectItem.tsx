import Tilt from "react-parallax-tilt";

type Props = {
  title: string;
  tech: string;
  description: string;
  url?: string;
  code: string;
  code2?: string;
  img: string;
};

const ProjectItem = ({
  title,
  tech,
  description,
  url,
  code,
  code2,
  img,
}: Props) => {
  return (
    <div id="project">
      <div className="project">
        <h3 className="project__title">{title}</h3>
        <div className="project__tech">
          <p>{tech}</p>
        </div>
        <div className="project__subtitle">
          <p>{description}</p>
        </div>
        {url && (
          <a href={url} className="project__live">
            Check App
          </a>
        )}
        <a href={code} className="project__code">
          Code
        </a>
        {code2 && (
          <a href={code2} className="project__code">
            Backend Code
          </a>
        )}
      </div>
      <Tilt className="project__image">
        <a href={url} className="project__image__link">
          <img src={img} alt="project__img" />
        </a>
      </Tilt>
    </div>
  );
};

export default ProjectItem;
