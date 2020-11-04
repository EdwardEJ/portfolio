import React from 'react';

export default function Projects() {
  return (
    <>
      <section id='projects'>
        <h2>Projects</h2>
        <div className='projectContent'>
          <div>
            <a href='https://ghibli-studio-movie-app.herokuapp.com/'>
              {' '}
              <img
                src={require('../imgs/ghibliProject.png')}
                alt='ghibli project'
              />
            </a>
          </div>
          <div>
            <a href='https://nasa-solo-project.netlify.app/'>
              <img src={require('../imgs/NASAPotD.png')} alt='NASA project' />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
