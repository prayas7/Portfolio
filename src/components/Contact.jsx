import React from "react";

const Contact = () => {
  return (
    <footer className="contact" id="contact">
      <h1 style={{ fontSize: "4rem", color: "white" }}>Contact</h1>
      <br />
      <div className="social-links">
        <a href="mailto:prayasgaur.pg57@gmail.com" className="icon">
          <i className="fas fa-envelope"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/prayas-gaur-b7b575267/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/prayas7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Contact;
