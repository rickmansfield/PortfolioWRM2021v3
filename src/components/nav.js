import React from 'react';
import './nav.css';

export default function Nav() {
  const user = {
    name: 'Rick Mansfield',
    linkedIn: 'https://www.linkedin.com/in/peacefulrick/'
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
        <a href='/'>Home</a>
        <a href='#projects'>Project</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  )
}

