import './aboutMe.css'
import { Lastfmdata } from './lastfmApi.js'
import React from "react";
import { Weather } from './weather.js'
import { jobs } from '../iterates.js'

const api_user = process.env.REACT_APP_LASTFM_USER
const api_key = process.env.REACT_APP_LASTFM_API_KEY
const weather_key = process.env.REACT_APP_WEATHER_API_KEY

const AboutMe = () =>{
        
    return(
        <div className='aboutMe' id="aboutme">
            <div className="abmeLeft">
                <Lastfmdata userName={api_user} 
                apiKey={api_key}/>
            </div>
            <div className="abmeRight">
                <h1>About Me</h1>
                <Weather />
                <p> I am an undergraduate studying Software and Biomedical Engineering in the Integrated 
                    Biomedical Engineering & Health Sciences Program at McMaster University. I believe 
                    that everyone can code, but writing code that is modular, efficient, consistent, and 
                    easy to read is the real challenge. Code is the building block of the complex 
                    programs we encounter every day: without a solid architecture, free of unnecessary 
                    dependencies and "tangled lines of code" everything can fall apart when a minuscule 
                    change is made. I strive to get closer to writing flawless, efficient and maintainable 
                    code with every line.</p>

                    <a href="Ahmed_ZafarResume.pdf" target="_blank"><div className="resumeButton">Resume</div></a>

                <p> I am currently on CO-OP at Biomedic.AI Labs @ McMaster where I specialize in 
                    different facets of Artificial Intelligence and Machine Learning. The lab 
                    specializes in utilizing Artificial intelligence as a tool within the healthcare 
                    field. The current focus of the lab is quantifying trust in autonomous medical 
                    advisory systems (AMAS).</p>

                <p> In my free time, I like to play tennis, go to the gym, travel, cook and try new food,
                    keep my many, many plants alive, and of course, listen to music. I love expanding the range of artists that I enjoy, 
                    you can find me listening to anything from Kendrick Lamar and Daniel Caesar to 
                    Clairo and BROCKHAMPTON. In fact, you can actually catch me listening to different 
                    artists. Under the photo in this section, I have created a live updating widget to 
                    see what song I am currently listening to (or the last song I played). Feel free to 
                    reach out to me with questions about my work and projects, music rec's, or just to chat 
                    about your favorite artists!</p>
                <h1 id="workxp">Work Experience</h1>
                <div className="items">
                    {
                        jobs.map((jobs)=>(
                            <div className='job'>
                                <h2 className="job-title">{jobs.title}</h2>
                                <div className="subject">
                                    <div>{jobs.employer}</div> <div>{jobs.date}</div>
                                </div>
                                <p>{jobs.desc}</p>
                                <div className="skills">
                                    {jobs.skills.map((skill)=>(
                                    <div className="skill">{skill}</div>
                                    ))}
                                </div>
                                <a href={jobs.link} target="_blank" className='link'><p>Learn More</p></a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutMe


/*
#add flashlight 
*/