import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Kevin Babauta</a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/kevinbabauta/" target="_blank" rel="noreferrer"><AiOutlineLinkedin/></a>
            <a href="https://github.com/kbabauta" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.instagram.com/motionxmonkey/" target="_blank" rel="noreferrer"><FaInstagram/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Kevin Babauta. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer