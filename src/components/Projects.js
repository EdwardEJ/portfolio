import React from 'react';

export default function Projects() {
  return (
    <>
      <section id='projects'>
        <h2>Projects</h2>
        <div className='projectContent'>
          <div>
            <img src={require('../imgs/NASAPotD.gif')} />
            <a href='https://ghibli-studio-movie-app.herokuapp.com/'>
              Ghibli Studio Movie App
            </a>
          </div>
          <div>
            <img src={require('../imgs/ghibliProject.gif')} />
            <a href='https://nasa-solo-project.netlify.app/'>NASA APoD</a>
          </div>
        </div>
      </section>
    </>
  );
}
