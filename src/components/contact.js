import React from 'react'
import './contact.css'


export default function Contact() {
    const user = {
        resume: '',         //link to your resume download (drag the pdf to portfolio_template/src/photos then copy the route ex "../photos/myresume.pdf")
        linkedIn: '',       //link to your LinkedIn
        gitHub: ''          //link to your gitHub
    }

    return (
        <div id='Contact'>
            <div className='cv_wrapper'>
                {user.resume && <a href={user.resume} download>CV</a>}
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
