import React from 'react';
import './nav2.css';

export default function Nav2({ isChecked, handleCheckboxChange, scrollToSection, sectionRefs }) {
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
        <button onClick={() => scrollToSection(sectionRefs.projectsRef)}>Projects</button>
        <button onClick={() => scrollToSection(sectionRefs.aboutRef)}>About</button>
        <button onClick={() => scrollToSection(sectionRefs.skillsRef)}>Skills</button>
        <button onClick={() => scrollToSection(sectionRefs.contactRef)}>Contact</button>
      </div>
    </nav>
  );
}
