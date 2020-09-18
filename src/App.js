import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Edward Estrada</h1>
        <h2>Front End Developer</h2>
        <div>
          <p>
            Hi I'm a web designer / developer based in Dallas, Texas. I have a
            passion for web design and love to create for web and mobile devices
            with the goal to convey the message that you want to send.
          </p>
        </div>
      </header>
      <main>
        <section id="projects">
          <h2>Projects</h2>
          <div>
            <a href="https://ghibli-studio-movie-app.herokuapp.com/">
              Ghibli Studio Movie App
            </a>
            <a href="https://nasa-solo-project.netlify.app/">NASA APoD</a>
          </div>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-icon-container">
            <img
              src={require("./imgs/html5-plain-wordmark.svg")}
              alt="HTML5 plain wordmark"
            />
            <img
              src={require("./imgs/css3-plain-wordmark.svg")}
              alt="CSS3 plain wordmark"
            />
            <img
              src={require("./imgs/javascript-plain.svg")}
              alt="JavaScript plain icon"
            />
            <img src={require("./imgs/git-plain.svg")} alt="Git plain icon" />
            <img
              src={require("./imgs/react-original-wordmark.svg")}
              alt="React original wordmark"
            />
            <img src={require("./imgs/redux-original.svg")} alt="redux icon" />
            <img
              src={require("./imgs/sass-original.svg")}
              alt="sass original icon"
            />
          </div>
        </section>
      </main>
      <footer id="contact">
        <h4>Contact Me</h4>
        <p>Edward Estrada 2020</p>
      </footer>
    </>
  );
}

export default App;
