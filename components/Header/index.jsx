import React, { useState } from 'react'
import { Container, 
          Title, 
          NavLinks, 
          Ancora, 
          Content, 
          Menu, 
          CloseSidebar, 
          ContentTitle, 
          SubTitle } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSiderbar = () => setSidebar(!sidebar)

 
  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>
          <strong>
          Portfólio 
          </strong>
          </Title>
          <SubTitle>
           Amanda Luiza
          </SubTitle>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
          <Link href="/">
            <Ancora className={activeLink('/')} onClick={showSiderbar}>Home</Ancora>
          </Link>
          <Link href="projects">
            <Ancora className={activeLink('projects')} onClick={showSiderbar}>Projects</Ancora>
          </Link>
          <Link href="contact">
            <Ancora className={activeLink('contact')} onClick={showSiderbar}>Contact</Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
    )
  }


