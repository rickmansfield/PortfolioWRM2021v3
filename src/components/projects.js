import React, { useState } from 'react';
import Project from './project';
import './projects.css';
import PotluckFE from '../photos/Potluck2Backend.jpg'
import PotluckBe from '../photos/food3.png'
import WaterMyPlantsPic from '../photos/waterMyPlants2.PNG'
import Background_keyboard from '../photos/background.jpg'
import RockPaperScisorsImg from '../photos/RockPaperScisors.png'

export default function Projects() {
    const [ displayProjects, setDisplayProjects ] = useState(true)

    const user_projects = [
        {
            title: 'Potluck Frontend', 
            description: 'Tired of being the one stuck planning EVERY potluck? Well, let us make it easier. Welcome to The Potluck Planner. Coordinate who\'s comming and make sure your party is more than just chips. Our appliacation makes planing the date, time, location, guests and dishes they bring a sinch!', 
            contributions: [ 
                'Frontend Developer | Technical Project Manager', 
                'Wrote production-ready code using ReactJS, Redux, and CSS to build single-page applications SPA’s', 
                'Approached all coding challenges using pair programming, agile software development Git workflow minimizing bugs', 
                'Designed original UX for mobile, tablet, and PC  from ideation to wireframing, to a final responsive product',
            ],
            gitHub: 'https://github.com/rickmansfield/Potluck-U3-FE-20210823',
            deployed_site: 'https://potlucku3fe20210823.netlify.app/',
            card_image:PotluckFE,
        },
        {
            title: 'Potluck Backend', 
            description: 'The backend bridge to the Frontend product.', 
            contributions: [    
                'Lead Backend Developer',
                'Single-handedly Configured entire DB and Backend code  producing the backbone for the project', 
                'Architected DB schema and all endpoints to accommodate Frontend needs and make their job easier', 
                'Oversaw  client and server testing via Postman, Postgres to ensure a bug-free deployment', 
            ],
            gitHub: 'https://github.com/rickmansfield/PotLuckBackEnd102021', 
            deployed_site: 'https://front-end-pearl-eight.vercel.app/',
            card_image: PotluckBe,
        },
        {
            title: 'Water My Plants FE', 
            description: 'Need help remembering to water those plants? Well here\'s the solution!', 
            contributions: [    
                'Lead Frontend Developer | Technical Project Manager', 
                'Initiated wireframe, file structure, and Repository for a team of six to build on a scalable architecture', 
                'Reviewed pull requests  and final mergers to ensure optimal  & bug-free UX/UI and React/Redux frontend functionality', 
                'Guided project’s Axios/CRUD RESTful state management to combine scalable usability with progressive visual design',
            ],
            gitHub: 'https://github.com/Build-Week-092021-Water-My-Plants/frontend', 
            deployed_site: 'https://water-my-plants-092021.netlify.app/',
            card_image: WaterMyPlantsPic,
        },
        {
            title: 'Rock Paper Scisors', 
            description: 'A fun online version of the classic Rock Paper Scisors Game. Play the computer or play your friends. This project demos simple algo logic like Fiz Buz Pop in basic JavaScript', 
            contributions: [    
                'Initiated basic Javascript, HTML, CSS simple clean site', 
                'Architected alog logic and employed jquery animations', 
                'Deployed using Github Pages', 
            ],
            gitHub: 'https://github.com/rickmansfield/RockPaperScisors_JS', 
            deployed_site: 'https://rickmansfield.github.io/RockPaperScisors_JS/',
            card_image: RockPaperScisorsImg,
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
            title: 'Portfolio.v3', 
            description: 'Yup! My Portfolio is 100% created and built by me.', 
            contributions: [
                'Initiated and Built the project end to end', 
                'Lead Team of ONE, fun chuckle', 
                'Loved every minute of it and continue to update it at every opportunity', 
            ],
            gitHub: 'https://github.com/rickmansfield/PortfolioWRM2021v3', 
            deployed_site: 'https://mansfield-port-v3.netlify.app/',
            card_image: Background_keyboard,
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