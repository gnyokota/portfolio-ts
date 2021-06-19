import ProjectItem from "./ProjectItem";
import project01 from "../../images/Project01.png";

import "./Projects.scss";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="projects__title">What I did until now</h1>
      <p className="projects__subtitle">
        Click to check the apps live and the source codes
      </p>
      <ProjectItem
        title={"Pantanal ecommerce website"}
        description={
          "Integer vitae nisl odio. Ut in lacus in lacus mollis faucibus. Nulla egestas nec est quis lobortis. Proin eros metus, lacinia mattis porta in, mollis sit amet ipsum. Nunc vitae enim pellentesque, porta urna at, molestie est. Etiam condimentum lacinia condimentum. Phasellus vel ex velit. Pellentesque pharetra ex eu odio feugiat, vel sodales quam maximus. Donec a congue urna. Etiam tempor magna nisi, sed pulvinar mauris bibendum et. Donec ut vehicula ex. Mauris libero nisl, hendrerit sit amet sagittis ac, dignissim et lorem. Vestibulum sit amet gravida metus. Nam accumsan lacus quis volutpat tincidunt. Suspendisse scelerisque cursus iaculis."
        }
        url={"https://ecommerce-pantanal.netlify.app/"}
        code={"https://github.com/gnyokota/frontend-ecommerce"}
        img={project01}
      />
    </div>
  );
};

export default Projects;
