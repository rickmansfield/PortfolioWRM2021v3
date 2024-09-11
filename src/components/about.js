import React from 'react'
import Rick from '../photos/RickMansfield.PNG'
import styled from "styled-components";

export default function About() {
    const userInfo = {
        profile_pic: Rick,
        bio: 'Full Stack Web Developer & Computer Science Engineer with a practical understanding of HTML, CSS (responsive design), C#, ASP.net, JavaScript, JSX, Node.js, React, Redux, SPA\'s, Express, SQLite3, MySQL, Postgres, Heroku, Python, MongoDB, and RESTful API & Responsive Design. Comfortable with New Features Implementation maintains and refactors existing code across various languages, frameworks, and databases. A growth mindset developer that works well with a team or independently in a remote setting',
    }
    
    return (
        <StyleAbout>
        <div id='About'>
            <h3 className='section_title'>- ABOUT -</h3>
            <div className='txt_wrapper'>
                <img src={userInfo.profile_pic} alt='this is Rick Mansfield!' />
                <p>{userInfo.bio}</p>
            </div>
        </div>
        </StyleAbout>
    )
}

const StyleAbout = styled.div`
#About {
    min-height: 100vh;
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

.txt_wrapper {
    height: 90%;
    width: 60%;
    margin: 0 auto;
}

.txt_wrapper img {
    border: 5px solid var(--primary_color);
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin-bottom: 50px;
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
