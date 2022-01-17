import React, { useState } from "react";
import "./css/contact.css";
import { validateEmail } from "../Utils/helpers";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(" ");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage((prevInputValue) => (prevInputValue = inputValue));
    }
  };

  const handleMouseLeave = (event) => {
    event.preventDefault(event);
    const { target } = event;
    const inputType = target.name;
    if (inputType === "email" && !email) {
      setErrorMessage("Email is required");
      return;
    } else if (inputType === "email" && !validateEmail(email)) {
      setErrorMessage("Email address is invalid");
      return;
    } else if (inputType === "name" && !name) {
      setErrorMessage(`${inputType} is required`);
    }
  };
  const handleMouseEnter = (event) => {
    event.preventDefault();
    setErrorMessage(" ");
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or name is invalid");
      return;
    }
    if (!message) {
      setErrorMessage(`A message is required`);
      return;
    }

    setName("");
    setEmail("");
    setMessage((prevInputValue) => (prevInputValue = ""));
    alert(`Hello ${name}, your message has been sent`);
  };

  return (
    <div className="container">
      <div className="cardBodyWide formCard">
      <form className="form">
        <h3 className="text-center">Send me a message</h3>
        <label htmlFor="email">Enter your email address</label>
        <input
          className="inputField"
          value={email}
          name="email"
          onChange={handleInputChange}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          type="email"
          placeholder="email"
        />
        <label htmlFor="name">Enter your name</label>
        <input
          className="inputField"
          value={name}
          name="name"
          onChange={handleInputChange}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          type="text"
          placeholder="Name"
        />
        <label htmlFor="contactMessage">Message</label>
        <textarea
          id="contactMessage"
          className={""}
          type="textarea"
          name="message"
          rows="4"
          placeholder="Message"
          maxLength="3000"
          onChange={handleInputChange}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        ></textarea>

        <button className="inputField" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </form>
      </div>
    </div>
  );
}

export default Contact;
