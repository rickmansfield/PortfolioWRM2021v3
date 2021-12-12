import React from 'react'
import styled from "styled-components";

export default function skills() {
    return (
        <StyledSkills>
        <div id="Skills">
            <h3 className='section_title'> - SKILLS - </h3>
            <p>Skills section under construction</p>
            <p>Coming Soon</p>
        </div>
        </StyledSkills>
    )
}

const StyledSkills = styled.div`
#Skills {
    min-height: 100vh;
    width: 100vw;
    background-color: #001220;
    display: flex;
    flex-direction: column;
}
.section_title, p {
    height: 10%;
    color: var(--primary_color);
    font-family: var(--accent_font);
    font-size: 3.5rem;
    margin: 25px auto;
}
@media screen and (max-width: 414px) {
}`;
