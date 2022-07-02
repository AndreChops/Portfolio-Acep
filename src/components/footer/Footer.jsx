import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AndreChops</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.instagram.com/andrechandraap/" target="_blank"><BsInstagram/></a>
        <a href="https://discordapp.com/users/285029497978355713" target="_blank"><BsDiscord/></a>
        <a href="https://www.youtube.com/channel/UC0wmJso24wL1Ycls_rKu4yA" target="_blank"><BsYoutube/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; AndreChops, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer