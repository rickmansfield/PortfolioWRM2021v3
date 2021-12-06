import React, { useState } from 'react';
import Project from './project';
import './projects.css';
import PotluckFE from '../photos/Potluck2Backend.jpg'
import PotluckBe from '../photos/food3.png'
import WaterMyPlantsPic from '../photos/waterMyPlants2.PNG'
import Background_keyboard from '../photos/background.jpg'
// import RockPaperScisorsImg from '../photos/RockPaperScisors.png'
import ChoreDoorImg from '../photos/ChoreDoor.png'
// import JammingImg from '../photos/jammming.png'
import UnderdogDevsImg from '../photos/UnderdogDevs.JPG'
import RavenousImg from '../photos/Ravenous.jpg'
// import StarWarsImg from '../photos/StarWars.png'
import GreatIdeaImg from '../photos/GreatIdea.png'


export default function Projects() {
    const [displayProjects, setDisplayProjects] = useState(true)

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
            card_image: PotluckFE,
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
            title: 'Rock Paper Scissors',
            description: 'A fun online version of the classic Rock Paper Scisors Game. Play the computer or play your friends. This project demos simple algo logic like Fiz Buz Pop in basic JavaScript',
            contributions: [
                'Initiated basic Javascript, HTML, CSS simple clean site',
                'Architected alog logic and employed jquery animations',
                'Deployed using Github Pages',
            ],
            gitHub: 'https://github.com/rickmansfield/RockPaperScisors_JS',
            deployed_site: 'https://rickmansfield.github.io/RockPaperScisors_JS/',
            card_image: 'https://media.giphy.com/media/3ohzdGnD5vAud1NCZW/giphy.gif',
        },
        {
            title: 'Chore Door',
            description: 'A fun interactive game based on simple JavaScript. Would you believe this game is desigedn with only 5 files? No kidding check the code yourself. HTML, CSS, JS, Img and README.md... that is it!',
            contributions: [
                'Created JavaScript based component with alogs, helper functions, and event handlers to give the game a fun interactive feel for the users experience (UX)',
                'Contributed to the Index.html to produce a streamlined simple application',
                'Contributed to some styling to polish off the app ',
            ],
            gitHub: 'https://github.com/rickmansfield/6-1-4_Project_Chore_Door',
            deployed_site: 'https://rickmansfield.github.io/6-1-4_Project_Chore_Door/',
            card_image: ChoreDoorImg,
        },
        {
            title: 'Spotify Jammming',
            description: 'That\'s Jammming with three "m\'s. This is a Javascript/React API with Spotify and it demos my knowledge of React components, passing state, and CRUD requests with the Spotify API. The application allows the user to search the Spotify Library, create a custom playlist, then save it to their real Spotify Account. ',
            contributions: [
                'Achiteched Directory Structure initiated React app and Created Static Components',
                'Passed State through a series of components to render an array of tracks using constuctor fuctions and .map()',
                'Enabled passing playlist to track list, adding tracks to playlist, removing tracks from playlist, changing of playlist name',
                'Hooked searchbar to Spotify database via API',
                'Wrote three methods that Get a Spotify user\'s access token, sends a search request to the Spotify API, and saves a user\'s playlist to their real Spotify account. ',
                'For more details see my GitHub repository'
            ],
            gitHub: 'https://github.com/rickmansfield/10-12-1_Project_Jammming',
            deployed_site: 'https://rickmansfield.github.io/10-12-1_Project_Jammming/',
            card_image: 'https://media.giphy.com/media/26gs7E0hBzuLhOrVC/giphy.gif',
        },
        {
            // title: 'Nasa Daily Photo',
            description: 'Get a new photo from NASA every day. This site uses REACT\'s UI library to create a complex rich user interface. It demonstrates building sometihng that could power the user experience in such a way that is decoupled and unconcerned when and where data is received. As a SPA it further demos my undertanding of the "V" in the MVC (Model, View, Controller) paradigm. The architecture permits small, resusable, pieces of UI that can be easily put together to make this scalable application',
            contributions: [
                'Empoloyed REACT to create a complex, rich user interface UI',
                'Created all the components, managed and displayed state creating a great experience for the user UX',
                'Passed data via props in components desiged to be easily maintained',
                'Employed or minimized "side effects" as needed',
                'Styled the app using multiple libraries demonstrating scalable advanced styling techniques'
            ],
            gitHub: 'https://github.com/rickmansfield/NASA-Daily-Photo',
            deployed_site: 'https://rickmansfield.github.io/NASA-Daily-Photo/',
            card_image: 'https://th.bing.com/th/id/R.babed827cebebf236f71a2bf1f2bcd4c?rik=YRZhpbH0T81t9g&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f5%2f63%2fcbZ6VN.png&ehk=OXu1EXojjaThyf%2bXKdZ9NUCdHXCk6CL8EKmQl8FxGQ4%3d&risl=&pid=ImgRaw&r=0',
        },
        {
            title: 'Underdog Devs',
            description: 'a community of software engineers supporting aspiring developers who come from disadvantaged backgrounds or who are formerly incarcerated',
            contributions: [
                'Lead a remote, cross-functional team of 18 to ship product features for a national non-profit ',
                'Created & Maintained User Story Backlog, scoped product features, ticket assignment,  utilizing agile strategies incorporating scrum, sprint, and burndown methodologies which kept our team on time for feature deliveries  ',
                'Pair programmed in both frontend and backend repositories to create a platform for the underprivileged to learn to code ',
            ],
            gitHub: 'https://github.com/BloomTech-Labs/underdog-devs-fe-a',
            deployed_site: 'https://www.underdogdevs.org/',
            card_image: UnderdogDevsImg,
        },
        {
            title: 'Ravenous Yelp API',
            description: 'A search engine home page demo. This project demos boostrapping with Create React App. It embodies creating a component based SPA from scratch. functionality may be disabled here as it relies on a YELP API key that may change from time to time. However, you may download this opensource publicly viewable repo and apply for your own activation key to paly around with the site. For now it is only ment to  demo base architecture, file structure, use of Class components and cross origin resource sharing CORS and API application key employment',
            contributions: [
                'Obtained YELP API Key and wrote function to fetch local restaurant data',
                'Created React App from scratch adding applicable stateful and stateless components as needed',
                'Used the classig CLASS Components for this particular project as there are many companies that still utilize Class components over function components',
            ],
            gitHub: 'https://github.com/rickmansfield/ravenous',
            deployed_site: 'https://ravenous-yelp-api.netlify.app/',
            card_image: RavenousImg,
        },
        {
            title: 'React Wars',
            description: 'In this demo I create a web page that presents a styled list of Star Wars characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge demos the ability to achieve such a task. This challenge allowed me to practice the concepts and techniques of Javascript combined with React and apply them in a concrete project. During this sprint, I studied React components and advanced styling. This project helps answer the question what is React JS and what problem does it solve. After reviewing [React](https://reactjs.org/) they say it\'s a Javascript library for building user inerfaces. In my own words, React.js is an open-source JavaScript Library. It is not a language. It\'s used to build out DOM from within a JS file specifically for single-page type applications giving a smooth fast user interface. It\'s scalable and it makes both the front end developer job and UX optimal. Let\'s pat Mark Zuckerburg\'s Jordan Walke (software engineer) on the back for making our lives easier.',
            contributions: [
                'Used Mock Server API to perform CRUD operations',
                'Set the list of characters into state & Rendered to DOM',
                'Built all components such as "Character.js" to render each individual character',
                'Mapped over the list in state rendering all charaters to the page and styled with styled-components',
                'Tested endpoints with both HTTPie and Postman'
            ],
            gitHub: 'https://github.com/rickmansfield/StarWars',
            deployed_site: 'https://star-wars-xi-roan.vercel.app/',
            card_image: 'https://media.giphy.com/media/kesu1tiePAiGY/giphy.gif',
        },
        {
            title: 'Lambda Eats',
            description: 'A fun project designded to bring food to hungry coders. Working from the home page I created funtionality such as the "Pizza?" button that leads the user to build thier own custom pizza form. The project allowed me to practice SPA Single Page Applications including routing, forms, and testing with cypress.',
            contributions: [
                'Builtout wireframes, SPA functioinal components, hooks, methods, and routes to render a custom pizza',
                'Used useRouteMatch to determine if a give component is on a certain page, set up routes like "/" for home link to the order form with a "/pizza" route ',
                'Employed YUP form validations to guide optimal UX',
                'Wrote Unit Tests with Cypress and jest.mock',
                'Used component styling via React styled-components library'
            ],
            gitHub: 'https://github.com/rickmansfield/LambdaEats',
            deployed_site: 'https://lambda-eats-pizza.netlify.app/',
            card_image: 'https://media.giphy.com/media/uYuNg2J4x9HUY/giphy.gif',
        },
        {
            title: 'Great Idea',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus rutrum molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet justo vel est semper laoreet. Sed ut euismod diam, quis eleifend dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dignissim ante at enim lacinia fringilla. Proin vitae aliquet orci. Quisque vehicula augue ligula, venenatis imperdiet metus fermentum quis. Nullam odio est, molestie a finibus vel, faucibus quis lectus. Fusce eu odio in elit convallis tristique. Integer consequat ac arcu vitae faucibus. In sagittis ac eros id luctus. Quisque sed malesuada nulla.',
            contributions: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            ],
            gitHub: '',
            deployed_site: '',
            card_image: GreatIdeaImg,
        },
        // {
        //     title: 'Project Title7', 
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus rutrum molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet justo vel est semper laoreet. Sed ut euismod diam, quis eleifend dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dignissim ante at enim lacinia fringilla. Proin vitae aliquet orci. Quisque vehicula augue ligula, venenatis imperdiet metus fermentum quis. Nullam odio est, molestie a finibus vel, faucibus quis lectus. Fusce eu odio in elit convallis tristique. Integer consequat ac arcu vitae faucibus. In sagittis ac eros id luctus. Quisque sed malesuada nulla.', 
        //     contributions: [    
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
        //     ],
        //     gitHub: '', 
        //     deployed_site: '',
        //     card_image: '',
        // },
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
                    return (
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