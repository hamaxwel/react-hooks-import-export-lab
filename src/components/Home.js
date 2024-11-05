// src/components/Home.js
import React from 'react';
import { username, city } from '../data/user'; // Correct relative path and named imports

const Home = () => {
  return (
    <section>
      <h2>Welcome to My Portfolio</h2>
      <p>Username: {username}</p>
      <p>City: {city}</p>
    </section>
  );
};

export default Home;
