import React from 'react'
import './portfolio.css'


import ShutterTalk from '../../assets/shutter-talk_1.jpg'
import Cheapshark from '../../assets/cheapshark02_1.jpg'
import ColossalRPG from '../../assets/colossal-rpg_1.jpg'
import {BsDot} from 'react-icons/bs'



const data = [
    {
        id: 1,
        image: ShutterTalk,
        title: 'Shutter Talk',
        description: 'Shutter Talk provides a space for photographers of all levels to discuss theory, share work, or discuss photography in general. Users are able to "like" or "dislike" posts as well as comment on posts made by other users.',
        github: 'https://github.com/kbabauta/shutter-talk',
        demo: 'https://shutter-talk.herokuapp.com/',
        tech: 'React , CSS , MongoDB Atlas , Javascript , HTML , Node.js , Git'
    },
    {
        id: 2,
        image: Cheapshark,
        title: 'Cheapshark Gaming',
        description: 'This app helps gamers find sales on various video game titles on PC. Users are able to type in a specific title name on the homepage or they can click on a "Deals List Page" and that will display current deals going on. Additionally, users on this page will be able to sort by New Deals, Savings, and Price.',
        github: 'https://github.com/kbabauta/vschool-assignments/tree/master/level-4/cheapshark-capstone',
        demo: 'https://cheapshark.netlify.app/"',
        tech: 'React , CSS , Javascript , HTML , Node.js , Git'
    },
    {
        id: 3,
        image: ColossalRPG,
        title: 'Colossal RPG',
        description: "In this fun little project, I was able to make a text-based RPG game. The game is played in a console (such as Visual Studio Code's Terminal) and makes use of Javascript functions, loops, conditionals and uses a variety of data types.",
        github: 'https://github.com/kbabauta/vschool-assignments/tree/master/level-1/colossal-adventure-rpg',
        demo: 'https://github.com/kbabauta/vschool-assignments/tree/master/level-1/colossal-adventure-rpg',
        tech: 'React , CSS , Javascript , HTML , Node.js , Git'
    }
]

const Portfolio = () => {
  return (
    <section id='portfolio' >
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {
                data.map(({id, image, title, description, github, demo, tech }) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <article className='portfolio__tech'>
                                <small>{tech}</small>
                            </article>
                            <div className="portfolio__item-cta">
                                <a href={github} className='btn' target="_blank">Github</a>
                                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                            </div>
                        </article>
                    )
                }) 
            }

        </div>
    </section>
  )
}
                    
export default Portfolio
                    
                
                