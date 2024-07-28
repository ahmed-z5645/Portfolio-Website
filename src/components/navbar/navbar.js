import React from 'react';
import './navbar.css';

const NavBar = () => {

    return(
        <div>
            <div className="navbar">
                <div className="navbar-list">
                    <a className="navbar-link" href='#hero'>Ahmed Zafar</a>
                    <a className="navbar-link" href='#aboutme'>About</a>
                    <a className="navbar-link" href="Ahmed_Zafar_Resume_TA.pdf" target="_blank">Resume</a>
                    <a className="navbar-link" href="#workxp">Work Experience</a>
                    <a className="navbar-link" href="#projects">Projects</a>
                    <a className="navbar-link" href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar