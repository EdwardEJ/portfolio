import React from 'react';

export default function About() {
  const icons = [
    {
      path: require('../imgs/github-original.svg'),
      alt: 'Github icon',
      link: 'https://github.com/EdwardEJ',
    },
    {
      path: require('../imgs/linkedin-original.svg'),
      alt: 'LinkedIn icon',
      link: 'https://www.linkedin.com/in/ed-estrada/',
    },
    {
      path: require('../imgs/email.svg'),
      alt: 'Email icon',
      link: 'mailto: jesus.e.estrada@hotmail.com',
    },
  ];

  return (
    <section id='about_me'>
      <div className='images_container'>
        <img
          className='aboutMePhoto'
          src={require('../imgs/aboutMePhoto.jpg')}
          alt='About Me'
        />
        <div className='icons'>
          {icons.map((icon, indx) => (
            <a key={indx} href={icon.link}>
              <img src={icon.path} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
      <span className='verticalDivider' />
      <p>
        Hi I'm a software developer based in Dallas, Texas. I have a passion for
        web design and love to create for web and mobile devices with the goal
        to convey the message that you want to send.
      </p>
    </section>
  );
}
