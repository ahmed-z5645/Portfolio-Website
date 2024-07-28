import React from 'react';
import './hero.css';

import Typewriter from 'typewriter-effect';
import arrow from './statics/arrow.svg'

const greeting = {
    textAlign: 'left',
}

const engineer = {
    textAlign: 'right',
    lineHeight: '100%',
    color: '#333333',
}

const Hero = () =>{
    return(
        <div className= 'Hero' id="hero">
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
            <img className='Arrowstyle'src={arrow}/>
            <p>Scroll for more</p>
          </div>
        </div>
    )
}
export default Hero;