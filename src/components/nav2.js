import React from 'react';
import './nav2.css';
import BackImg from '../photos/background.jpg';

export default function Nav2({ isChecked, handleCheckboxChange, scrollToSection, sectionRefs }) {
  const user = {
    name: 'Rick Mansfield',
    linkedIn: 'https://www.linkedin.com/in/peacefulrick/TEST'
  };

  return (
    <>
      <nav id='nav2'>
        <div className='nav2-user_info'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <a href={user.linkedIn}>
            {user.name}
          </a>
        </div>
        <div className='nav2_links'>
          <button onClick={() => scrollToSection(sectionRefs.projectsRef)}>Projects</button>
          <button onClick={() => scrollToSection(sectionRefs.aboutRef)}>About</button>
          <button onClick={() => scrollToSection(sectionRefs.skillsRef)}>Skills</button>
          <button onClick={() => scrollToSection(sectionRefs.contactRef)}>Contact</button>
        </div>
      </nav>
      <div className="nav2-img-container">
        <picture>
          <source srcSet={BackImg} type="image/jpg" />
          <img src={BackImg} alt="Background" className="nav2-background-img" />
        </picture>
        <div className="nav2-overlay-text">
          <h1>Clean code. Efficient solutions.</h1>
          <p>Ready to build the future</p>
        </div>
      </div>
    </>
  );
}
