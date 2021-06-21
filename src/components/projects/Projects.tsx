import ProjectItem from "./ProjectItem";
import project01 from "../../images/Project01.png";
import project02 from "../../images/Project02.png";
import project03 from "../../images/Project03.png";
import project04 from "../../images/Project04.png";
import project05 from "../../images/Project05.png";
import project06 from "../../images/Project06.png";
import project07 from "../../images/Project07.png";
import project08 from "../../images/Project08.png";

import "./Projects.scss";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="projects__title">What I did until now</h1>
      <p className="projects__subtitle">
        Click to check the apps live and the source codes
      </p>
      <ProjectItem
        title={"Pantanal ecommerce app"}
        tech={
          "MongoDB, Express, React JS, Node.js,Typescript, bcrypt, jsonwebtoken, Material-UI, Formik, Axios, Cloudinary, multer"
        }
        description={`This full-stack ecommerce application, it was one of the assignments developed during 
          the Integrify Academy bootcamp. The backend was built with Node.js, Express and 
          TypeScript, the data were stored on the MongoDB Atlas database service, 
          the controllers were tested using supertest and different privilege were added 
          for admin and regular users . The front-end was built with React and Typescript. 
          For both front and back-end the CI/CD was implemented, the first was deployed on Netlify, 
          while the latter was deployed on Heroku. `}
        url={"https://ecommerce-pantanal.netlify.app/"}
        code={"https://github.com/gnyokota/frontend-ecommerce"}
        code2={"https://github.com/gnyokota/backend-ecommerce"}
        img={project01}
      />
      <ProjectItem
        title={"Face recognition app"}
        tech={
          "React JS, React-tilt, React-particles, Node.js, Express.js, bcrypt,  PostgreSQL"
        }
        description={`This frontend application was one of the assignments developed during the Integrify 
          Academy bootcamp. It was built from scratch  with TypeScript. The data for the countries 
          was fetched from an external API (REST Countries), the styling was built with Material-UI, 
          and the state management was done with React Redux. This full-stack application was built 
          from scratch. This is a face recognition application, in it the authentication was built 
          with bcrypt (password-hash encryption) and the face recognition data fetched from an external 
          API (AI Face Recognition by Clarifai). The app was deployed on Heroku and the database was 
          also connected to Heroku.`}
        url={"http://facerec-2021.herokuapp.com/"}
        code={"https://github.com/gnyokota/face-recognition"}
        code2={"https://github.com/gnyokota/face-recognition-backend"}
        img={project02}
      />
      <ProjectItem
        title={"Countries API app"}
        tech={
          "React JS, TypeScript, React Redux, Redux Thunk, Material-UI, API"
        }
        description={`This front-end application was one of the assignments developed during the Integrify 
          Academy bootcamp. It was built from scratch  with TypeScript. The data for the countries 
          was fetched from an external API (REST Countries), the styling was built with Material-UI, 
          and the state management was done with React Redux.`}
        url={"https://countries-app-reduxreact.netlify.app/"}
        code={"https://github.com/gnyokota/countriesAPI_redux"}
        img={project03}
      />
      <ProjectItem
        title={"Authentication app"}
        tech={
          "MongoDB, Express, React JS, Node.js, Typescript, bcrypt, jsonwebtoken, Sass, Axios"
        }
        description={`This full-stack application was built from scratch. In the app, 
        authentication and authorization were implemented. Moreover, 
        a private route was created, which can be accessed only with a generated token (JWT). 
        An option to recover the password was created using SendGrid.\n
        \n PS: This App was not deployed because of the SendGrid account limitations of email/day. 
        However, it is possible to find the code for both backend and frontend in the buttons below.`}
        url={"https://github.com/gnyokota/mern-auth"}
        code={"https://github.com/gnyokota/mern-auth"}
        img={project04}
      />
      <ProjectItem
        title={"Quiz app"}
        tech={"React JS, TypeScript, Sass, API "}
        description={`A front-end application built from scratch with TypeScript. 
        The data for the quiz was fetched from an external API (Open Trivia Database)
         and the app was deployed on GitHub pages. `}
        url={"https://gnyokota.github.io/quiz-typescript/"}
        code={"https://github.com/gnyokota/quiz-typescript"}
        img={project06}
      />
      <ProjectItem
        title={"Find your place app"}
        tech={"React JS, React Router, CSS"}
        description={`A front-end application built from scratch with React JS and CSS for web and mobile. 
        The routes were built using react router. The app was deployed on GitHub pages.`}
        url={"https://gnyokota.github.io/website_react/"}
        code={"https://github.com/gnyokota/website_react"}
        img={project05}
      />
      <ProjectItem
        title={"Tindog app"}
        tech={"HTML, CSS, Bootstrap"}
        description={`A front-end application built from scratch with HTML and CSS for web and mobile. 
        Bootstrap was also used for styling. The app was deployed on GitHub pages.`}
        url={"https://gnyokota.github.io/Tindog_TAB/"}
        code={"https://github.com/gnyokota/Tindog_TAB"}
        img={project07}
      />
      <ProjectItem
        title={"Huddle app"}
        tech={"HTML,CSS"}
        description={`A front-end application built from scratch with HTML and CSS for web and mobile. This is a front-end coding challenge from Frontend Mentor. `}
        url={"https://gnyokota.github.io/Huddle_Project/"}
        code={"https://github.com/gnyokota/Huddle_Project"}
        img={project08}
      />
    </div>
  );
};

export default Projects;
