// import './nav.css';
import React from 'react';
import styled from 'styled-components'

export default function Nav() {
    const user = {
        name: 'Name', // change 'userName' to Your Name
        linkedIn: 'your LinkedIn URL Here'      // insert linkedIn profile link here
    } 

    return (
        <StyleNav>
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
        </StyleNav>
    )
}
const StyleNav = styled.div`
#Nav {
    height: 100px;
    width: 100%;
    background: var(--secondary_color);
    display: none;
    justify-content: space-between;
    align-items: center;
}

.user_name {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    margin-left: 50px;
}

.user_name a {
    font-family: var(--accent_font);
    color: var(--primary_color);
    font-size: 3rem;
}

.links {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 50px;
}

.links a {
    font-family: var(--accent_font);
    color: var(--primary_color);
    font-size: 1.2rem;
}
`