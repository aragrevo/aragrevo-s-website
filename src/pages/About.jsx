import React from 'react';

export const About = () => {
  return (
    <section id='about' className='app__section'>
      <div className='container'>
        <div className='about__content'>
          <h2 className='about__title'>Hi, I’m Eduardo. Nice to meet you.</h2>
          <h3 className='about__subtitle'>
            Since beginning my journey as a front-end developer nearly{' '}
            {new Date().getFullYear() - 2019} years ago, I've done remote work
            for agencies. I'm quietly confident, naturally curious, and
            perpetually working on improving my chops.
          </h3>
        </div>
      </div>
    </section>
  );
};
