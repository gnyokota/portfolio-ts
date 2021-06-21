import React, { useState, useEffect } from "react";
import photo from "../../images/photo.png";

import "./Profile.scss";

const Profile = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <div id="profile">
      <div className="profile">
        <div className="profile__title">
          <h1
            className={
              animation
                ? "profile__animation--left"
                : "profile__animation--none"
            }
          >
            Hi, I am
          </h1>
          <h1>
            <strong
              className={
                animation
                  ? "profile__animation--left"
                  : "profile__animation--none"
              }
            >
              Giovana Yokota
            </strong>
          </h1>
        </div>
        <div className="profile__subtitle">
          <h2
            className={
              animation
                ? "profile__animation--right"
                : "profile__animation--none"
            }
          >
            WEB DEVELOPER
          </h2>
          <div />
        </div>

        <img src={photo} alt="profile-img" className="profile__img" />
      </div>
    </div>
  );
};

export default Profile;
