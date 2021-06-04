import React, { useState } from 'react';
import { Hero } from './components/Hero';
// import

const App = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <h3>Coding</h3>
        <nav>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Home</a>
            </li>
          </ul>
        </nav>
      </div>
      <Hero />
    </div>
  );
};

export default App;
