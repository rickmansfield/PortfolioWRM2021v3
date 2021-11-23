import React from 'react'
import './contact.css'


export default function Contact() {
    const user = {
        resume: 'https://resume.creddle.io/resume/4uxc0m7zngm', 
        linkedIn: 'https://www.linkedin.com/in/peacefulrick/',
        gitHub: 'https://github.com/rickmansfield',
    }

    return (
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
    )
}
