import React from 'react'
import './about.css'
import ME from '../../assets/portfoliopicture2.jpg'

import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="" />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">

                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Experience</h5>
                        <small>7+ years working</small>
                    </article>

                    {/* <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5>Clients</h5>
                        <small></small>
                    </article> */}

                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
                        <small>75+ completed</small>
                    </article>
                </div>

                <p>
                    I am a proud father, husband, and Veteran. I am passionate about creating something and watching it run. Whether it is building a website, a car, or computer, I love seeing what I build grow. When I'm not working, I dedicate my time to my family. I am an automotive enthusiast and a photographer. I am always looking for ways to be creative and productive.
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About