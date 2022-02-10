import React from "react";
import "./css/Card.css";
import "./css/footer.css";

import content from "../Portfolio";

function Card() {
  return (
    <div className="container">
      {content.map(({ heading, content, github, link, image }, index) => (
        <section
          key={index}
          className={index === 0 ? "projectCardBodyWide" : "projectCardBody"}
        >
          <div className="projectCardText">
            <div>
              <a href={link} className="cursor-pointer" target="_blank" rel="noreferrer">
                <h2 className="text-center cursor-pointer">{heading}</h2>
              </a>
              <p className="cardContent">{content}</p>
              {/* adding Github Icon */}
              <a href={github} target="_blank" rel="noreferrer">
                <img
                  className="githubImage"
                  src={require("./images/github.png")}
                  alt="github"
                />
              </a>
            </div>
          </div>
          <div className="projectCardImage">
            <a href={link} target="_blank" rel="noreferrer">
              <img src={require(`${image}`)} alt="Project / app images" />
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Card;
