import React, { useState } from 'react';
import Project from './project';
import './projects.css';
import { user_projects } from './UserProjects';  // TODO: convert to API call

export default function Projects() {
    const [displayProjects, setDisplayProjects] = useState(true);

    return (
        <div id='Projects'>
            <h3 className='section_title'>- PROJECTS -</h3>

            {displayProjects && <div className='projects_wrapper'>
                {user_projects.map((proj, index) => {
                    return (
                        <Project proj={proj} setDisplayProjects={setDisplayProjects} key={index} />
                    )
                })}
            </div>}
        </div>
    );
}
