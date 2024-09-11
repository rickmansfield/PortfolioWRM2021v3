import React from 'react';
import './nav1.css';

export default function Nav1({ isChecked, handleCheckboxChange }) {
  const user = {
    name: 'Rick Mansfield',
    subtitle: 'Full Stack Web Development',
    subtitle2: '& Computer Science Engineer',
    linkedIn: 'https://www.linkedin.com/in/peacefulrick/TEST'
  };

  return (
    <div className='nav1'>
      <div className='nav1_background_img'>
        <div className='nav1_user_info'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <a href={user.linkedIn}>
            <h1>{user.name}</h1>
          </a>
        </div>
        <div className='nav1_links'>
          <a href='/'>Home</a>
          <a href='#Projects'>Projects</a>
          <a href='#About'>About</a>
          <a href='#Contact'>Contact</a>
        </div>
        <div className='nav1_text'>
          <a href={user.linkedIn}>
            <h1>{user.subtitle}</h1>
            <h2>{user.subtitle2}</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
