import React from 'react'
import './contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <article className='contact__option'>
          <AiOutlineMail/>
          <h4>Email</h4>
          <h5>andrechandra4817@gmail.com</h5>
          <a href='mailto:andrechandra4817@gmail.com' target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp/>
          <h4>WhatsApp</h4>
          <h5>+62 878-1933-7088</h5>
          <a href='https://api.whatsapp.com/send/?phone=087819337088&text&type=phone_number&app_absent=0' target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          <BsLinkedin/>
          <h4>LinkedIn</h4>
          <h5>Andre Chandra Putra</h5>
          <a href='https://linkedin.com/in/andre-chandra-putra-093904229/' target="_blank">Send a message</a>
        </article>
      </div>
    </section>
  )
}

export default Contact