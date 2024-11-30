import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './contactMe.css';
import { logos1, logos2 }  from '../iterates.js'
import contactGraphic from '../statics/contact.svg'

const email_api_public = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
const email_api_service = process.env.REACT_APP_EMAIL_SERVICE_ID;
const email_api_temp = process.env.REACT_APP_EMAIL_TEMP_KEY;

const Contact = ({email_public=email_api_public, service=email_api_service, temp=email_api_temp}) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (form) {
            emailjs
            .sendForm(service, temp, form.current, {
                publicKey: email_public,
                })
            .then(() => {
                console.log('SUCCESS!');
                alert('Message sent successfully!!')
        }, (error) => {
            console.log('FAILED...', error.text);
            });
        }
        
    };
    return(
        <div className="contactMe" id="contact">
            <div className="contact">
                <div className="email-form">
                    <h1>Contact Me - </h1>
                    <p>I am currently looking for Summer 2025 software engineering positions! 
                        If you have any questions or you’d just like to say hi (I’d love to 
                        chat!), feel free to reach out to me using the messaging box below, or 
                        by any of the various methods listed to the right</p>
                    <form ref={form} onSubmit={sendEmail} className='forms'>
                        <input type="text" name="user_name" 
                        placeholder="Name" className="form" minLength={1}/>
                        
                        <input type="email" name="user_email" 
                        placeholder="Email"className="form" minLength={6}/>

                        <input type="text" name="message" multiline
                        placeholder="Message" className="message-form"/>

                        <button type="submit" className="email-button" onHover={{cursor: 'pointer'}}>
                            Send
                        </button>
                    </form>
                </div>
                <div className="logos">
                    <div className="row">
                        {logos1.map((logo)=>(
                            <div>
                                <a href={logo.link}><img src={logo.image} className="logo" alt="a logo"/></a>
                            </div>
                        ))}
                        {logos2.map((logo)=>(
                            <div>
                                <a href={logo.link}><img src={logo.image} className="logo2" alt="a logo"/></a>
                            </div>
                    ))}
                    </div>
                </div>
                <div className="graphic">
                    <img src={contactGraphic} width='100%' />
                </div>
            </div>
            <br />
            <p style={{textAlign: 'center'}}>All code written, produced, and arranged w/ <span className="love">love</span> by Ahmed Zafar</p>
        </div>
    )
}

export default Contact;