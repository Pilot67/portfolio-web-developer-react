import React from "react";
import "./css/footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <h4>Melbourne, Australia</h4>
      </div>
      <div>
        <a href={"https://github.com/Pilot67"} target="_blank" rel="noreferrer">
          <img
            className={"footerImage"}
            src={require("./images/github-white.png")}
            alt="github"
          />
        </a>
        <a
          href={"https://www.linkedin.com/in/stuart-simmons-7a818325/"}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={"footerImage"}
            src={require("./images/linkedin-white.png")}
            alt="LinkedIn"
          />
        </a>
        <a
          href={"https://stackoverflow.com/users/16347112/stuart"}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={"footerImage"}
            src={require("./images/stack-overflow-white.png")}
            alt="StackOverflow"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
