import React from 'react'
import './about.css'
import ME from '../../assets/acep-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


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
          {/* <div className="about__cards">
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
          </div> */}

          <p>
            Hi, I'm Andre Chandra Putra, most people call me acep. Currently studying Informatics at Universitas Multimedia Nusantara.
            Thanks for visiting my personal website, this website was made using React Framework. 
            You can contact me through my email andrechandra4817@gmail.com.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About