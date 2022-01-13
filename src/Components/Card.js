import React from "react";
import "./css/Card.css";
import content from "../Portfolio";

const imageName = './images/pilot-log-gif.gif'
function Card() {
  return (
    <div className={"container"}>
      {content.map(({ heading, content, github, link , image}, index) => (
        <section
          key={index}
          className={index === 0 ? "cardBodyWide" : "CardBody"}
        >
          <div className={"cardText"}>
            <div>
              <a href={link} target="_blank" rel="noreferrer">
                <h2 className="text-center">{heading}</h2>
              </a>
              <p>{content}</p>
            </div>
            <a href = {github} target="_blank" rel="noreferrer">Click here for the Github Repository</a>
          </div>
          <a className="cardImage" href={link} target="_blank" rel="noreferrer">
            <img src={require(`${image}`)} alt = ""/>
          </a>
        </section>
      ))}
    </div>
  );
}

export default Card;
