import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Sidebar } from './components/Sidebar';
// import

const App = () => {
  return (
    <div className='__container'>
      <section id='home'>
        <Hero />
      </section>
      <section id='services'>
        <h2>services</h2>
      </section>
      <section id='gallery'>
        <h2>gallery</h2>
      </section>
      <section id='contact'>
        <h2>contact</h2>
      </section>
      <Sidebar />
    </div>
  );
};

export default App;
