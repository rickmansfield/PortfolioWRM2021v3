import React from 'react'
import styled from "styled-components";

export default function skills() {
    return (
        <StyledSkills>
        <div id="Skills">
            <h3 className='section_title'> - SKILLS - </h3>
            <h4 className='section_title'>FRONTEND: </h4>
            <p>React.js, Redux, Hooks, Context API, Jest, Yum, Axios, Javascript, HTML, CSS, Ant Design, RESTful API Design, JSX</p>
            <h4 className='section_title'>BACKEND: </h4>
            <p>Node.js, Express, SQL, PostgreSQL, Python, Git CLI, VS Code, Vercel, Heroku, Netlify, Postman</p>
        </div>
        </StyledSkills>
    )
}

const StyledSkills = styled.div`
#Skills {
    min-height: 100vh;
    width: 100vw;
    background-color: #001220;
    display: flex;
    flex-direction: column;
}
.section_title, p {
    height: 10%;
    color: var(--primary_color);
    font-family: var(--accent_font);
    font-size: 3.5rem;
    margin: 25px auto;
}
@media screen and (max-width: 414px) {
}`;
