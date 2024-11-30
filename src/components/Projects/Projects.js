import React, { useState, useEffect } from "react";
import './Projects.css';
import desk from '../statics/desk.svg'
import { proj1, proj2, proj3 } from '../iterates.js'

const standout = {
    color: '#3d667b',
    fontWeight: '1000'
}

const Projects = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=> {
        const mediaCheck = window.matchMedia("(max-width: 900px)")

        const handleResize = () => setIsMobile(mediaCheck.matches);

        handleResize()
        mediaCheck.addEventListener("change", handleResize)

        return () => mediaCheck.removeEventListener("change", handleResize)
    }, [])

    return(
        <>
            {isMobile ? (
                <div className="Projects" id="projects">
                    <div className="background">
                        <div className="top-gradient"></div>
                        <div className="content">
                            <div className="title-blurb">
                                <h1>PROJECTS:</h1>
                                <h2>
                                    The opportunity to <span style={standout}>create</span> & <span style={standout}>design</span> is what drove me to 
                                    become an <span style={standout}>engineer</span>. Here 
                                    are some of my <span style={standout}>favourite</span> things I have built!
                                </h2>
                            </div>
                            <div className="Col">
                                {proj1.map((proj1) =>(
                                    <div className= "card" onClick={() => {window.open(proj1.link)}}>
                                        <img src={proj1.image} className="cardImage" />
                                        <h2>{proj1.Title}</h2>
                                        <h3>{proj1.date}</h3>
                                        <p>{proj1.desc}</p>
                                        <div className="skillsp">
                                            {proj1.skills.map((skill)=>(
                                                <div className="skillp">{skill}</div>
                                            ))}
                                        </div>
                                    </div>
                                    ))}
                                {proj3.map((proj3) =>(
                                    <div className= "card" onClick={() => {window.open(proj3.link)}}>
                                        <img src={proj3.image} className="cardImage" />
                                        <h2>{proj3.Title}</h2>
                                        <h3>{proj3.date}</h3>
                                        <p>{proj3.desc}</p>
                                        <div className="skillsp">
                                            {proj3.skills.map((skill)=>(
                                                <div className="skillp">{skill}</div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                {proj2.map((proj2) =>(
                                <div className= "card">
                                    <img src={proj2.image} className="cardImage" onClick={() => {window.open(proj2.link)}} />
                                    <h2>{proj2.Title}</h2>
                                    <h3>{proj2.date}</h3>
                                    <p>{proj2.desc}</p>
                                    <div className="skillsp">
                                        {proj2.skills.map((skill)=>(
                                            <div className="skillp">{skill}</div>
                                        ))}
                                    </div>
                                </div>
                                ))}
                                <img src={desk} style={{ width: "100%"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-gradient"></div>
                </div>
            ) : (
                <div className="Projects" id="projects">
                    <div className="background">
                        <div className="top-gradient"></div>
                        <div className="content">
                            <div className="Col" style={{marginTop: "0%"}}>
                                <div className="title-blurb">
                                    <h1>PROJECTS:</h1>
                                    <h2>
                                    The opportunity to <span style={standout}>create</span> & <span style={standout}>design</span> is what drove me to 
                                    become an <span style={standout}>engineer</span>. Here 
                                    are some of my <span style={standout}>favourite</span> things I have built!
                                    </h2>
                                </div>
                                {proj3.map((proj3) =>(
                                    <div className= "card" onClick={() => {window.open(proj3.link)}}>
                                        <img src={proj3.image} className="cardImage" />
                                        <h2>{proj3.Title}</h2>
                                        <h3>{proj3.date}</h3>
                                        <p>{proj3.desc}</p>
                                        <div className="skillsp">
                                            {proj3.skills.map((skill)=>(
                                                <div className="skillp">{skill}</div>
                                            ))}
                                        </div>
                                    </div>
                                    ))}
                                <img className='deskstyle' src={desk} />
                            </div>
                            <div className="Col">
                                {proj1.map((proj1) =>(
                                    <div className= "card" onClick={() => {window.open(proj1.link)}}>
                                        <img src={proj1.image} className="cardImage" />
                                        <h2>{proj1.Title}</h2>
                                        <h3>{proj1.date}</h3>
                                        <p>{proj1.desc}</p>
                                        <div className="skillsp">
                                            {proj1.skills.map((skill)=>(
                                                <div className="skillp">{skill}</div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="Col">
                                {proj2.map((proj2) =>(
                                <div className= "card">
                                    <img src={proj2.image} className="cardImage" onClick={() => {window.open(proj2.link)}} />
                                    <h2>{proj2.Title}</h2>
                                    <h3>{proj2.date}</h3>
                                    <p>{proj2.desc}</p>
                                    <div className="skillsp">
                                        {proj2.skills.map((skill)=>(
                                            <div className="skillp">{skill}</div>
                                        ))}
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="bottom-gradient"></div>
                </div>
            )}
        </>   
    )
}

export default Projects