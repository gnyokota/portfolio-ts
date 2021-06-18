import React from "react";

const ProjectItem = () => {
  return (
    <div>
      <div className="project-wrapper__text">
        <h3 className="project-wrapper__text-title">Project Title 0</h3>
        <div>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            neque, ipsa animi maiores repellendus distinctio aperiam earum dolor
            voluptatum consequatur blanditiis inventore debitis fuga numquam
            voluptate ex architecto itaque molestiae.
          </p>
        </div>
        <a target="_blank" className="cta-btn cta-btn--hero" href="#!">
          See Live
        </a>
        <a target="_blank" className="cta-btn text-color-main" href="#!">
          Source Code
        </a>
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="project-wrapper__image">
          <a href="#!" target="_blank">
            <div data-tilt className="thumbnail rounded">
              <img className="img-fluid" src="#" alt="project__img" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
