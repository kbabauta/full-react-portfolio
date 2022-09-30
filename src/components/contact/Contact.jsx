import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'

import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_n03b0pv', 'template_9qvtqca', form.current, '8Ewd6q30EGtMb-xDW')

        
        .then((result) => {
            alert ("Your email has been sent!")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset()
      };

    return (
        <section id='contact'>
            <h5>I'm looking forward to hearing from you!</h5>
            <h2><b>CONTACT</b></h2>
            {/* <h5>Get In Touch</h5> */}

            <div className="container contact__container">
                <div className="contact__options">
                    {/* <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <a href="mailto: kjr.babauta@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article> */}
                    <article className='contact__option'>
                        <AiOutlineLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/kevinbabauta/" target="_blank" rel="noreferrer">Connect With Me</a>
                    </article>
                </div>
            {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message'></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact