import React from 'react'
import styled from "styled-components";

export default function skills() {
    return (
        <StyledSkills>
        <div id="Skills">
            <h3 className='section_title'> - SKILLS - </h3>
            <h4 className='sub_title'>FRONTEND: </h4>
            <div className='txt_wrapper'>
            <p>React.js, Redux, Hooks, Context API, Jest, Yum, Axios, Javascript, HTML, CSS, Ant Design, RESTful API Design, JSX</p>
            </div>
            <h4 className='sub_title'>BACKEND: </h4>
            <div className='txt_wrapper'>
            <p>Node.js, Express, SQL, PostgreSQL, Python, Git CLI, VS Code, Vercel, Heroku, Netlify, Postman</p>
            </div>
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
.section_title {
    height: 10%;
    color: var(--primary_color);
    font-family: var(--accent_font);
    font-size: 3.5rem;
    margin: 25px auto;
}
.sub_title {
    height: 10%;
    color: var(--primary_color);
    font-family: var(--accent_font);
    font-size: 2.0rem;
    margin: 25px auto;
}
.txt_wrapper {
    height: 90%;
    width: 60%;
    margin: 0 auto;
}
.txt_wrapper p {
    font-size: 1.3rem;
    color: var(--primary_color);
    padding: auto;
    line-height: 2;
    margin-bottom: 25px;
}

@media screen and (max-width: 414px) {
    .txt_wrapper {
        width: 80%;
    }
}`;
