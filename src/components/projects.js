import React, { useState } from 'react';
import Project from './project';
import './projects.css';
import PotluckFE from '../photos/Potluck2Backend.jpg'
import PotluckBe from '../photos/food3.png'

export default function Projects() {
    const [ displayProjects, setDisplayProjects ] = useState(true)

    const user_projects = [
        {
            title: 'Potluck Frontend', 
            description: 'Tired of being the one stuck planning EVERY potluck? Well, let us make it easier. Welcome to The Potluck Planner. Coordinate who\'s comming and make sure your party is more than just chips. Our appliacation makes planing the date, time, location, guests and dishes they bring a sinch!', 
            contributions: [ 
                'Connected Frontend UI and Backend Database', 
                'Create Base Organization/Repositories on GitHub', 
                'Scrum master overseeing all pull requests & final merges', 
                'Set up initial React Project and File Structure', 
                'Create CRUD applications for functionality', 
            ],
            gitHub: 'https://github.com/rickmansfield/Potluck-U3-FE-20210823',
            deployed_site: 'https://potlucku3fe20210823.netlify.app/',
            card_image:PotluckFE,
        },
        {
            title: 'Potluck Backend', 
            description: 'The backend bridge to the Frontend product. ', 
            contributions: [    
                'Single-handedly Configured entire DB and Backend using Node.js, Express, Heroku', 
                'Architected DB schema and all endpoints to accommodate Frontend needs ', 
                'Gained hands-on experience with client and server testing via Postman, Postgress', 
            ],
            gitHub: 'https://github.com/rickmansfield/PotLuckBackEnd102021', 
            deployed_site: 'https://front-end-pearl-eight.vercel.app/',
            card_image: PotluckBe,
        },
        {
            title: 'Water My Plants FE', 
            description: 'Need help remembering to water those plants? Well hers\'s the solution!', 
            contributions: [    
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
            ],
            gitHub: '', 
            deployed_site: '',
            card_image: '',
        },
        {
            title: 'Project Title4', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus rutrum molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet justo vel est semper laoreet. Sed ut euismod diam, quis eleifend dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dignissim ante at enim lacinia fringilla. Proin vitae aliquet orci. Quisque vehicula augue ligula, venenatis imperdiet metus fermentum quis. Nullam odio est, molestie a finibus vel, faucibus quis lectus. Fusce eu odio in elit convallis tristique. Integer consequat ac arcu vitae faucibus. In sagittis ac eros id luctus. Quisque sed malesuada nulla.', 
            contributions: [    
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
            ],
            gitHub: '', 
            deployed_site: '',
            card_image: '',
        },
        {
            title: 'Project Title5', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus rutrum molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet justo vel est semper laoreet. Sed ut euismod diam, quis eleifend dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dignissim ante at enim lacinia fringilla. Proin vitae aliquet orci. Quisque vehicula augue ligula, venenatis imperdiet metus fermentum quis. Nullam odio est, molestie a finibus vel, faucibus quis lectus. Fusce eu odio in elit convallis tristique. Integer consequat ac arcu vitae faucibus. In sagittis ac eros id luctus. Quisque sed malesuada nulla.', 
            contributions: [    
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
            ],
            gitHub: '', 
            deployed_site: '',
            card_image: '',
        },
        {
            title: 'Project Title6', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus rutrum molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet justo vel est semper laoreet. Sed ut euismod diam, quis eleifend dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dignissim ante at enim lacinia fringilla. Proin vitae aliquet orci. Quisque vehicula augue ligula, venenatis imperdiet metus fermentum quis. Nullam odio est, molestie a finibus vel, faucibus quis lectus. Fusce eu odio in elit convallis tristique. Integer consequat ac arcu vitae faucibus. In sagittis ac eros id luctus. Quisque sed malesuada nulla.', 
            contributions: [    
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
            ],
            gitHub: '', 
            deployed_site: '',
            card_image: '',
        },
        {
            title: 'Project Title7', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus rutrum molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet justo vel est semper laoreet. Sed ut euismod diam, quis eleifend dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dignissim ante at enim lacinia fringilla. Proin vitae aliquet orci. Quisque vehicula augue ligula, venenatis imperdiet metus fermentum quis. Nullam odio est, molestie a finibus vel, faucibus quis lectus. Fusce eu odio in elit convallis tristique. Integer consequat ac arcu vitae faucibus. In sagittis ac eros id luctus. Quisque sed malesuada nulla.', 
            contributions: [    
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
            ],
            gitHub: '', 
            deployed_site: '',
            card_image: '',
        },
        {
            title: 'Project Title8', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus rutrum molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet justo vel est semper laoreet. Sed ut euismod diam, quis eleifend dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dignissim ante at enim lacinia fringilla. Proin vitae aliquet orci. Quisque vehicula augue ligula, venenatis imperdiet metus fermentum quis. Nullam odio est, molestie a finibus vel, faucibus quis lectus. Fusce eu odio in elit convallis tristique. Integer consequat ac arcu vitae faucibus. In sagittis ac eros id luctus. Quisque sed malesuada nulla.', 
            contributions: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
            ],
            gitHub: '', 
            deployed_site: '',
            card_image: '',
        },
    ]

    return (
        <div id='Projects'>
            <h3 className='section_title'>- PROJECTS -</h3>
        
            {displayProjects && <div className='projects_wrapper'>
                {user_projects.map((proj, index) => {
                    return(
                        <Project proj={proj} setDisplayProjects={setDisplayProjects} key={index} /> 
                    )
                })}

            </div>}
            
        </div>
    )
}
/*
            <div className='background_img'>
            <img src={user_projects.card_image} alt='Potluck Meal' /></div>
*/