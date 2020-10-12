import React from 'react'

export default function Main() {
  const images = [
    {
      path: require('../imgs/html5-plain-wordmark.svg'),
      alt: 'HTML5 plain wordmark'
    },
    {
      path: require('../imgs/css3-plain-wordmark.svg'),
      alt: 'CSS3 plain wordmark'
    },
    {
      path: require('../imgs/javascript-plain.svg'),
      alt: 'JavaScript plain icon'
    },
    {
      path: require('../imgs/git-plain.svg'),
      alt: 'Git plain icon'
    },
    {
      path: require('../imgs/html5-plain-wordmark.svg'),
      alt: 'HTML5 plain wordmark'
    },
    {
      path: require('../imgs/react-original-wordmark.svg'),
      alt: 'React original wordmark'
    },
    {
      path: require('../imgs/redux-original.svg'),
      alt: 'Redux icon'
    },
    {
      path: require('../imgs/sass-original.svg'),
      alt: 'SASS original icon'
    },
    {
      path: require('../imgs/nodejs-plain-wordmark.svg'),
      alt: 'Node plain wordmark'
    },
  ]

  return (
    <main>
      <hr className='horizontalDivider' />
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
      <hr className='horizontalDivider' />
          <h2>Skills</h2>
          <div className="skills-icon-container">
          {
            images.map((imgs, indx) => (
              <img key={indx} src={imgs.path} alt={imgs.alt} />
            ))
          }
          </div>
        </section>
    </main>
  )
}
