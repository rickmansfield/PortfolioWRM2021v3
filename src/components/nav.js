import React from 'react';
import './nav.css';
/*
import styled from 'styled-components'
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
*/
export default function Nav() {
    const user = {
        name: 'Rick Mansfield', 
        linkedIn: 'https://www.linkedin.com/in/peacefulrick/'
    } 

    return (
        //<StyleNav>
        <nav id='Nav'>
            <div className='user_name'>
                <a href={user.linkedIn}>
                    {user.name}
                </a>
                <p></p>
            </div>
            <div className='links'>
                <a href='/'>Home</a>
                <a href='#projects'>Project</a>
                <a href='#about'>About</a>
                <a href='#contact'>Contact</a>
            </div>
        </nav>
       // </StyleNav>
    )
}

