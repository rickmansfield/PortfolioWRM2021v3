import React from 'react'
import styled from 'styled-components'


export default function Contact() {
    const user = {
        resume: 'https://resume.creddle.io/resume/4uxc0m7zngm', 
        linkedIn: 'https://www.linkedin.com/in/peacefulrick/',
        gitHub: 'https://github.com/rickmansfield',
    }

    return (
        <StyleContact>
        <div id='Contact'>
            <div className='cv_wrapper'>
                {user.resume && <a href={user.resume} download>Resume</a>}
            </div>
            <div className='footer_links'>
                <a href='/'>Home</a>
                <a href='#Projects'>Projects</a>
                <a href='#About'>About</a>
            </div>
            <div className='footer_icon_wrapper'>
                <a href={user.linkedIn}><i className="lni lni-linkedin-original"></i></a>
                <a href={user.gitHub}><i className="lni lni-github-original"></i></a>
            </div>
        </div>
        </StyleContact>
    )
}

const StyleContact = styled.div`
#Contact {
    height: 15vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #c62368;
}

.cv_wrapper {
    font-size: 2rem;
    width: 33%;
}

.cv_wrapper a {
    color: #001220;
}

#Contact a:hover {
    border: none;
}

.footer_links {
    width: 33%;
    display: flex;
    justify-content: space-evenly;
}

.footer_links a {
    font-size: 1.3rem;
    color: #001220;
    font-family: var(--accent_font);
}

.footer_links a:hover {
    border-bottom: 1px solid #001220;
}

.footer_icon_wrapper {
    width: 33%;
}

.footer_icon_wrapper a {
    font-size: 2rem;
    color: #001220;
    margin: 0 25px;
}

.footer_icon_wrapper a i:hover {
    transform: scale(1.2);
}

@media screen and (max-width: 414px) {
    .footer_links a:nth-child(2),
    .footer_links a:nth-child(3) {
        display: none;
    }

    .footer_icon_wrapper a {
        margin: 0 10px;
    }
}`;