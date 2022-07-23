import React from 'react'
import './about.css'
import ME from '../../assets/acep-about.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <h2>Who am I ?</h2>
          <p>
            Hi, I'm Andre Chandra Putra, most people call me acepe. Currently studying Informatics at Universitas Multimedia Nusantara.
            I'm interested on Web Development, mainly on the Front-End side.
            Thanks for visiting my personal website, this website was made using React Framework. 
          </p>

          <a href='#contact' className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About