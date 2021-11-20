import './nav.css';
import React from 'react'

export default function Nav() {
    const user = {
        name: 'Name', // change 'userName' to Your Name
        linkedIn: 'your LinkedIn URL Here'      // insert linkedIn profile link here
    } 

    return (
        <nav id='Nav'>
            <div className='user_name'>
                <a href={user.linkedIn}>
                    {user.name}
                </a>
            </div>
            <div className='links'>
                <a href='/'>Home</a>
                <a href='#projects'>Projects</a>
                <a href='#about'>About</a>
                <a href='#contact'>Contact</a>
            </div>
        </nav>
    )
}
