import React from 'react'
import './portfolio.css'
import ATM from '../../assets/ATM.png'
import Travelokie from '../../assets/Travelokie.png'
import Lowongan from '../../assets/Lowongan.png'

const data = [
  {
    id: 1,
    image: ATM,
    title: 'Anugrah Teknik Mandiri - Website',
    github: 'https://github.com',
    demo: 'https://cv-atm.com'
  },
  {
    id: 2,
    image: Travelokie,
    title: 'Web Programming Final Exam Project - Travelokie',
    github: 'https://github.com',
    demo: 'https://sledge-hammer-fuses.000webhostapp.com/'
  },
  {
    id: 3,
    image: Lowongan,
    title: 'Expert System Final Exam Project - Lowongan Programmer',
    github: 'https://github.com',
    demo: 'https://lowongan-programmer.000webhostapp.com/'
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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