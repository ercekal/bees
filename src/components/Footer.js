import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    height: 240px;
    justify-content: space-between;
  }
`

const Upper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding-bottom: 5rem;
  }
`

const Lower = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
    flex-direction: row;
  }
`

const MobileTopContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`

const DesktopTopContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    height: 140px;
    width: 100%;
  }
`

const Middle = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 768px) {
    margin-left: 3rem;
    justify-content: space-evenly;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 50%;
  @media (min-width: 768px) {
    width: initial;
  }
`

const CountriesList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 90px;
  width: 350px;
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

const Image = styled.img`
  padding: 2rem 0;
  width: 100px;
`

const ListTitle = styled.div`
  padding-bottom: 0.5rem;
`

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

  const renderLinks = () =>
    bottomLinks.map(link => (
      <LinkItem to={link.path} key={link.path}>
        <Text>{link.title}</Text>
      </LinkItem>
    ))

  const rendercountries = () =>
    countries.map(c => (
      <WorkSans
        fontWeight="400"
        size="14px"
        lineHeight="16.42px"
        color="#FFFFFF"
        key={c.countryName}
      >
        {c.countryName}
      </WorkSans>
    ))

  const renderGetInTouch = () => (
    <>
      <Link to="/contact">
        <ListTitle>
          <WorkSans
            fontWeight="600"
            size="1rem"
            lineHeight="1.5rem"
            color="#FFFFFF"
          >
            {getInTouchTitle}
          </WorkSans>
        </ListTitle>
      </Link>
      {getInTouchElements.map(c => (
        <Icon key={c.icon.title} src={'http:' + c.icon.file.url} />
      ))}
    </>
  )
  return (
    <section style={{ backgroundColor: 'black' }}>
      <div className="container clearfix">
        <Container>
          <MobileTopContainer>
            <Upper>
              <Image src={'http:' + logo.file.url} />
            </Upper>
            <Middle>
              <List>
                <ListTitle>
                  <BarlowText
                    size="18px"
                    lineHeight="22px"
                    color="#FFFFFF"
                  >
                    {countriesTitle}
                  </BarlowText>
                </ListTitle>
                {rendercountries()}
              </List>
              <List>{renderGetInTouch()}</List>
            </Middle>
          </MobileTopContainer>
          <DesktopTopContainer>
            <Upper>
              <Image src={'http:' + logo.file.url} />
            </Upper>
            <Middle>
              <List>
                <ListTitle>
                  <BarlowText
                    size="18px"
                    lineHeight="22px"
                    color="#FFFFFF"
                  >
                    {countriesTitle}
                  </BarlowText>
                </ListTitle>
                <CountriesList>{rendercountries()}</CountriesList>
              </List>
              <List>{renderGetInTouch()}</List>
            </Middle>
          </DesktopTopContainer>
          <Lower>
            <Text>{tradeMark}</Text>
            <Links>{renderLinks()}</Links>
          </Lower>
        </Container>
      </div>
    </section>
  )
}

export default Footer
