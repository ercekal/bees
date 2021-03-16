import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  left: 0px;
  background: #000000;
`

const Upper = styled.div`
  display: flex;
`

const Lower = styled.div`
  display: flex;
  justify-content: space-between;
`

const Links = styled.div`
  display: flex;
`

const Text = styled.p`
  font-family: Work Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  opacity: 0.5;
`

const LinkItem = styled(Link)`
  padding: 0 1rem;
  text-decoration: none;
`

const Footer = ({ footer }) => {
  const {
    getInTouchTitle,
    getInTouchElements,
    countriesTitle,
    countries,
    tradeMark,
    bottomLinks,
  } = footer

  const renderLinks = () => {
    return bottomLinks.map(link => (
      <LinkItem to={link.path} key={link.path}>
        <Text>{link.title}</Text>
      </LinkItem>
    ))
  }
  return (
    <Container>
      <Upper>test</Upper>
      <Lower>
        <Text>{tradeMark}</Text>
        <Links>{renderLinks()}</Links>
      </Lower>
    </Container>
  )
}

export default Footer
