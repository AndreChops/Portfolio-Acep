import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/andre-chandra-putra-093904229/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AndreChops" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/andrechandraap/" target="_blank"><BsInstagram/></a>
        <a href="https://discordapp.com/users/285029497978355713" target="_blank"><BsDiscord/></a>
    </div>
  )
}

export default HeaderSocials