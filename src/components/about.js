import React from 'react'
import './about.css'
import Rick from '../photos/RickMansfield.PNG'
export default function About() {
    const userInfo = {
        profile_pic: Rick, //use a square formatted image
        bio: 'Full Stack Web Developer & Computer Science Engineer with a practical understanding of (HTML, CSS (responsive design), JavaScript, JSX, Node JS, React, Redux, Express, SQLite3, MySQL, Postgres, Python, MongoDB, and RESTful API & Responsive Design. Comfortable with New Features Implementation maintains and refactors existing code across various languages, frameworks, and databases. A growth mindset developer that works well with a team or independently in a remote setting',
    }
    
    return (
        <div id='About'>
            <h3 className='section_title'>- ABOUT -</h3>
            <div className='txt_wrapper'>
                <img src={userInfo.profile_pic} alt='this is me!' />
                <p>{userInfo.bio}</p>
            </div>
        </div>
    )
}
