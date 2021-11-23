import React from 'react'
import './main.css';

export default function Main() {
    const user = {
        name: 'Rick Mansfield',
        subtitle: 'Full Stack Web Development & Computer Science Engineer'
    }

    return (
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
                </div>
            </div>
        </div>
    )
}
