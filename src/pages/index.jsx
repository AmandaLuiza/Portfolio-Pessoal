import { FaArrowRight } from 'react-icons/fa'
import { Container, 
            Content, 
            Infos, 
            Name, 
            Function, 
            Intro, 
            LinkProjects, 
            Logo, 
            Img } from '../../styles/indexStyle'
import Link from 'next/link'


export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name><strong>Hi, I am Amanda Luiza</strong></Name>
        <Function><h2>Software Developer</h2></Function>
        <Intro><h3>Graduating in Systems Analysis and Development, 
          I have web development experience
          (React, Angular, JavaScript and others).</h3>
        </Intro>
      </Infos>
      <Logo>
        <Img src="/assets/Amanda.jpg" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
