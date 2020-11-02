import React from 'react';

export default function Projects() {
  const images = [
    {
      path: require('../imgs/html5-plain-wordmark.svg'),
      alt: 'HTML5 plain wordmark',
    },
    {
      path: require('../imgs/css3-plain-wordmark.svg'),
      alt: 'CSS3 plain wordmark',
    },
    {
      path: require('../imgs/javascript-plain.svg'),
      alt: 'JavaScript plain icon',
    },
    {
      path: require('../imgs/git-plain.svg'),
      alt: 'Git plain icon',
    },
    {
      path: require('../imgs/html5-plain-wordmark.svg'),
      alt: 'HTML5 plain wordmark',
    },
    {
      path: require('../imgs/react-original-wordmark.svg'),
      alt: 'React original wordmark',
    },
    {
      path: require('../imgs/redux-original.svg'),
      alt: 'Redux icon',
    },
    {
      path: require('../imgs/sass-original.svg'),
      alt: 'SASS original icon',
    },
    {
      path: require('../imgs/nodejs-plain-wordmark.svg'),
      alt: 'Node plain wordmark',
    },
  ];

  return (
    <>
      <hr className='horizontalDivider' />
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
      <hr className='horizontalDivider' />
      <section id='skills'>
        <h2>Skills</h2>
        <div className='skills-icon-container'>
          {images.map((imgs, indx) => (
            <img key={indx} src={imgs.path} alt={imgs.alt} />
          ))}
        </div>
      </section>
    </>
  );
}
