import React from 'react'
import './main.css';
// import styled from 'styled-components';
// import backGroundImg from '../photos/background.jpg'

export default function Main() {
    const user = {
        name: 'Rick Mansfield',
        subtitle: 'Full Stack Web Development',
        subtitle2: '& Computer Science Engineer'
    }

    return (
        // <StyleMain>
        <div id='Main'>
            <div className='main_background_img'>
                <div className='main_links'>
                    <a href='/'>Home</a>
                    <a href='#Projects'>Projects</a>
                    <a href='#About'>About</a>
                    <a href='#Contact'>Contact</a>
                </div>
                <div className='main_text'>
                    <h1>{user.name}</h1>
                    <h2>{user.subtitle}</h2>
                    <h2>{user.subtitle2}</h2>
                </div>
            </div>
        </div>
        // /* </StyleMain> */
    )
}
/*
const StyleMain = styled.div`
#Main {
    height: 100vh;
    width: 100%;
}
.main_background_img {
    height: 100%;
    width: 100%;
    background-image: url(${backGroundImg});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.main_links {
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10% auto 0;
}

.main_links a {
    font-family: var(--accent_font);
    color: var(--primary_color);
    font-size: 1.5rem;
}

.main_text {
    display: flex;
    flex-direction: column;
    margin: 50px auto 50vh;
    color: var(--primary_color);
}

.main_text h1 {
    font-size: 4rem;
    font-family: var(--accent_font);

}

.main_text h2 {
    font-size: 2rem;
    font-family: var(--accent_font);
}

@media screen and (max-width: 414px) {
    .main_links {
        width: 75%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin: 10% auto 0;
    }
    
    .main_links a {
        width: 40%;
        font-family: var(--accent_font);
        color: var(--primary_color);
        font-size: 1.5rem;
        margin: 10px 5px;
    }`;
    */