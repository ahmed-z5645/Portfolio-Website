import React, { useState, useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './hero.css';
import back from './hero_images/back.png'
import clouds from './hero_images/clouds.png'
import mountain1 from './hero_images/mountain1.png'
import mountain2 from './hero_images/mountain2.png'
import mountain3 from './hero_images/mountain3.png'
import trees1 from './hero_images/trees1.png'
import trees2 from './hero_images/trees2.png'

import Typewriter from 'typewriter-effect';

const greeting = {
    textAlign: 'left',
    color: "#333333"
}

const engineer = {
    textAlign: 'right',
    lineHeight: '100%',
    color: '#333333',
}

const Hero = () =>{

    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=> {
        const mediaCheck = window.matchMedia("(max-width: 700px)")

        const handleResize = () => setIsMobile(mediaCheck.matches);

        handleResize()
        mediaCheck.addEventListener("change", handleResize)

        return () => mediaCheck.removeEventListener("change", handleResize)
    }, [])


    return(
        <>
            {isMobile ? 

                <div className= 'smallHero' id="hero">
                    <div className='Nametag'>
                        <p style={greeting}>Hey! My name is</p>
                        <div className="Bigname">
                            <h3 className="Name">Ahmed</h3>
                            <h3 className="Lastname">Zafar</h3>
                        </div>
                        <p style={engineer}><Typewriter
                            onInit={(typewriter)=>{
                                typewriter.typeString("Software/Biomedical <br /> Engineer").start();
                            }} /></p>
                    </div>
                    <div className="Scroll">
                        <p>Scroll for more</p>
                    </div>
                </div>
                : 

                <div className='Hero' id="hero">
                    <Parallax pages={1.1} className="ParentParallax">
                        <ParallaxLayer offset={0} speed={1} style={{width: "100vw"}}>
                            <img src={back} />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0.1} speed={1.5} style={{width: "100vw"}}>
                            <img src={clouds} className={clouds}/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0.25} speed={2} style={{width: "100vw"}}>
                            <img src={mountain1} className={mountain1}/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0.5} speed={2.5} style={{width: "100vw"}}>
                            <img src={mountain2} className={mountain2}/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0.7} speed={3} style={{width: "100vw"}}>
                            <img src={mountain3} className={mountain3} />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0.2} speed={0.5}>
                            <div className='Nametag'>
                                <p style={greeting}>Hey! My name is</p>
                                <div className="Bigname">
                                    <h3 className="Name">Ahmed</h3>
                                    <h3 className="Lastname">Zafar</h3>
                                </div>
                                <p style={engineer}><Typewriter
                                onInit={(typewriter)=>{
                                typewriter.typeString("Software/Biomedical <br /> Engineer").start();
                                }} /></p>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0.93} speed={3.5} style={{width: "100vw"}}>
                            <img src={trees1} className={trees1}/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0.99} speed={4} style={{width: "100vw"}}>
                            <img src={trees2} className={trees2}/>
                        </ParallaxLayer>
                    </Parallax>
                </div>
                
            }
        </>
    )
}

export default Hero;