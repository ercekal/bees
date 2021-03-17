import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  /* height: 350px; */
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

const Middle = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 1rem 0;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
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

const Image = styled.img``

const Icon = styled.img`
  width: 15px;
  height: 15px;
`

const Footer = ({ footer }) => {
  const {
    logo,
    getInTouchTitle,
    getInTouchElements,
    countriesTitle,
    countries,
    tradeMark,
    bottomLinks,
  } = footer
  // console.log('getInTouchElements: ', getInTouchElements)
  // console.log('getInTouchElements: ', getInTouchElements[0].file)
  // console.log('getInTouchElements: ', getInTouchElements[0].file.url)

  const renderLinks = () =>
    bottomLinks.map(link => (
      <LinkItem to={link.path} key={link.path}>
        <Text>{link.title}</Text>
      </LinkItem>
    ))
  return (
    <Container>
      <Upper>
        <Image src={'http:' + logo.file.url} />
      </Upper>
      <Middle>
        <List>
          <p>{countriesTitle}</p>
          {countries.map(c => (
            <p key={c.countryName}>{c.countryName}</p>
          ))}
        </List>
        <List>
          <p>{getInTouchTitle}</p>
          {getInTouchElements.map(c => (
            <Icon
              key={c.icon.title}
              src={'http:' + c.icon.file.url}
            />
          ))}
        </List>
      </Middle>
      <Lower>
        <Text>{tradeMark}</Text>
        <Links>{renderLinks()}</Links>
      </Lower>
    </Container>
  )
}

export default Footer
