import React from 'react'
import './nav1.css';

export default function Nav1() {
  const user = {
    name: 'Rick Mansfield',
    subtitle: 'Full Stack Web Development',
    subtitle2: '& Computer Science Engineer',
    linkedIn: 'https://www.linkedin.com/in/peacefulrick/TEST'
  }

  return (
    <div id='Main'>
      <div className='main_background_img'>
        <div className='main_links'>
          <a href='/'>Home</a>
          <a href='#Projects'>Projects</a>
          <a href='#About'>About</a>
          <a href='#Contact'>Contact</a>
        </div>
        <div className='main_text'>
          <a href={user.linkedIn}>
          <h1>{user.name}</h1>
          <h2>{user.subtitle}</h2>
            <h2>{user.subtitle2}</h2>
          </a>
        </div>
      </div>
    </div>
  )
}
