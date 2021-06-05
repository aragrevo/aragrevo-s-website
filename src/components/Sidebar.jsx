import React from 'react';

export const Sidebar = () => {
  const menu = [
    {
      path: '#home',
      icon: 'person',
      title: 'Home',
    },
    {
      path: '#services',
      icon: 'fingerprint',
      title: 'Services',
    },
    {
      path: '#gallery',
      icon: 'image',
      title: 'Gallery',
    },
    {
      path: '#contact',
      icon: 'alternate_email',
      title: 'Contact',
    },
  ];
  return (
    <nav>
      <ul className='sidebar'>
        {menu.map((item) => (
          <li className='nav-item'>
            <a href={item.path} className='nav-link'>
              <i class='material-icons'>{item.icon}</i>
              <span className='title'>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
