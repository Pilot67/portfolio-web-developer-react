import React from "react";
import "./css/resume.css"

function Resume() {
  return (
    <div className="container">
      <section className="cardBodyWide">
        <div className="cardText cardTextAbout">
          <h3>Resume</h3>
          <br/>
          <h5>Software development competencies</h5>
          <br/>
          <ul className="competenciesList">
            <li >Frontend</li>
            <ul className="competenciesItems">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>Bootstrap</li>
              <li>Responsive Design - Mobile First</li>
              <li>React</li>
              <li>Progressive Web Applications</li>
            </ul>
            <br/>
            <li>Backend</li>
            <ul className="competenciesItems">
              <li>API's</li>
              <li>Node</li>
              <li>Express</li>
              <li>SQL</li>
              <li>NoSQL Database</li>
              <li>MySQL, Sequelize</li>
              <li>Mongoose, MongoDB</li>
              <li>GraphQL</li>
            </ul>
          </ul>
          <ul>
            <li></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Resume;
