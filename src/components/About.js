import React from 'react';
import { image } from '../data/user'; 

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src={image} alt="Profile" />
    </section>
  );
};

export default About;
