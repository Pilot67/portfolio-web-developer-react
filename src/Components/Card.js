import React from "react";
import "./css/Card.css";
import content from "../Portfolio";

function Card() {
  return (
    <div className={"container"}>
      {content.map(({ heading, content, github, link, image }, index) => (
        <section
          key={index}
          className={index === 0 ? "cardBodyWide" : "cardBody"}
        >
          <div className={"cardText"}>
            <div>
              <a href={link} target="_blank" rel="noreferrer">
                <h2 className="text-center">{heading}</h2>
              </a>
              <p>{content}</p>
            </div>
            <a href={github} target="_blank" rel="noreferrer">
              Click here for the Github Repository
            </a>
          </div>
          <div className={"cardImage"}>
            <a
              className={"cardImage"}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={require(`${image}`)} alt="Project / app images" />
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Card;
