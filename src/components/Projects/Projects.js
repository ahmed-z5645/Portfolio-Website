import React from "react";
import './Projects.css';
import desk from '../statics/desk.svg'
import { proj1, proj2 } from '../iterates.js'

const standout = {
    color: '#3d667b',
    fontWeight: '1000'
}

const Projects = () => {

    return(
        <div className="Projects" id="projects">
            <div className="background">
                <div className="top-gradient"></div>
                <div className="content">
                    <div className="title">
                        <h1>PROJECTS:</h1>
                        <h2>
                            The opportunity to <span style={standout}>create</span> & <span style={standout}>design</span> is what drove me to 
                            become an <span style={standout}>engineer</span>. Here 
                            are some of my <span style={standout}>favourite</span> things I have built!
                        </h2>
                        <img className='deskstyle' src={desk} />
                    </div>
                    <div className="Cards">
                        <div className="coloumn">
                            {proj1.map((proj1) =>(
                                <div className= "card">
                                    <img src={proj1.image} className="cardImage" />
                                    <h2>{proj1.Title}</h2>
                                    <h3>{proj1.date}</h3>
                                    <p>{proj1.desc}</p>
                                    <div className="skillsp">
                                        {proj1.skills.map((skill)=>(
                                            <div className="skillp">{skill}</div>
                                        ))}
                                    </div>
                                    <a href={proj1.link} target="_blank" className="link"><p>Learn more</p></a>
                                </div>
                            ))}
                        </div>
                        <div className="coloumn">
                            {proj2.map((proj2) =>(
                                    <div className= "card">
                                        <img src={proj2.image} className="cardImage" />
                                        <h2>{proj2.Title}</h2>
                                        <h3>{proj2.date}</h3>
                                        <p>{proj2.desc}</p>
                                        <div className="skillsp">
                                            {proj2.skills.map((skill)=>(
                                                <div className="skillp">{skill}</div>
                                            ))}
                                        </div>
                                        <a href={proj2.link} target="_blank" className="link"><p>Learn more</p></a>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="bottom-gradient"></div>
            </div>
        </div>
    )
}

export default Projects