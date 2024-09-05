import React from 'react';
import './nav2.css';

export default function Nav2() {
  const user = {
    name: 'Rick Mansfield',
    linkedIn: 'https://www.linkedin.com/in/peacefulrick/TEST'
  }

  return (
    <nav id='Nav'>
      <div className='user_name'>
        <a href={user.linkedIn}>
          {user.name}
        </a>
        <p></p>
      </div>
      <div className='links'>
        <a href='/'>Home TEST ME</a>
        <a href='#projects'>Project</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  )
}

