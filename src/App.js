import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Edward Estrada</h1>
        <h2>Front End Developer</h2>
        <p>
          Hi I'm a web designer / developer based in Dallas, Texas. I have a
          passion for web design and love to create for web and mobile devices
          with the goal to convey the message that you want to send.
        </p>
      </header>
      <main>
        <section>
          <h2>Projects</h2>
          <div>
            <a href="https://ghibli-studio-movie-app.herokuapp.com/">
              Ghibli Studio Movie App
            </a>
            <a href="https://nasa-solo-project.netlify.app/">NASA APoD</a>
          </div>
        </section>
        <section>
          <h2>Skills</h2>
          <img
            src="src/imgs/css3-plain-wordmark.svg"
            alt="CSS3 plain wordmark"
          />
        </section>
      </main>
    </>
  );
}

export default App;
