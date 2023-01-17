import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin,  
         FaEnvelope, 
         FaDiscord,
         FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/amanda-luiza-4a68b2158" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="amandaluiza3225@gmail.com" 
        />
         <ItemContact 
          IconFa={FaDiscord} 
          LinkContact="https://discord.com/channels/Mandy#6747" 
        />
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/AmandaLuiza" 
        />
      </Content>
    </Container>
  )
}
