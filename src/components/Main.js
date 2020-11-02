import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

export default function Main() {
  return (
    <main>
      <About />
      <hr className='horizontalDivider' />
      <Projects />
      <hr className='horizontalDivider' />
      <Skills />
    </main>
  );
}
