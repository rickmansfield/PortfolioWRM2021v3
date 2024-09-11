import React, { useState } from 'react';
import Project from './project';
import './projects.css';
import { user_projects } from './UserProjects';  // TODO: Placeholder for future API call

export default function Projects({ scrollToSection, projectsRef }) {
  const [activeProject, setActiveProject] = useState(null);
  const [isFadingIn, setIsFadingIn] = useState(false);

  const handleProjectClick = (project) => {
    setActiveProject(project);
    setIsFadingIn(false);
    setTimeout(() => {
      scrollToSection(projectsRef);
      setTimeout(() => {
        setIsFadingIn(true);
      }, 300);
    }, 200);
  };

  const handleExit = () => {
    setActiveProject(null);
  };

  return (
    <div id='Projects'>
      {!activeProject && (

        <h3 className='section_title'>- PROJECTS -</h3>
      )
      }

      {activeProject ? (
        <Project proj={activeProject} handleExit={handleExit} isFadingIn={isFadingIn} />
      ) : (
        <div className='projects_wrapper'>
          {user_projects.map((proj, index) => (
            <Project proj={proj} key={index} onClick={() => handleProjectClick(proj)} />
          ))}
        </div>
      )}
    </div>
  );
}

