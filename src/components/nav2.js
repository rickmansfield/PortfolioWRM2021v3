import React from 'react';
import './nav2.css';

export default function Nav2({ isChecked, handleCheckboxChange }) {
  const user = {
    name: 'Rick Mansfield',
    linkedIn: 'https://www.linkedin.com/in/peacefulrick/TEST'
  };

  return (
    <nav id='nav2'>
      <div className='user_info'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <a href={user.linkedIn}>
          {user.name}
        </a>
      </div>
      <div className='nav_links'>
        <a href='/'>Home</a>
        <a href='#projects'>Projects</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  );
}
