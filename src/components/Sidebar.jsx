import React from 'react';

export const Sidebar = () => {
  const menu = [
    {
      path: '#home',
      icon: 'home',
      title: 'Home',
    },
    {
      path: '#services',
      icon: 'cogs',
      title: 'Services',
    },
    {
      path: '#gallery',
      icon: 'images',
      title: 'Gallery',
    },
    {
      path: '#contact',
      icon: 'address-book',
      title: 'Contact',
    },
  ];
  return (
    <nav>
      <ul className='sidebar'>
        {menu.map((item) => (
          <li className='nav-item'>
            <a href={item.path} className='nav-link'>
              <i class={`fas fa-${item.icon}`}></i>
              <span className='title'>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
