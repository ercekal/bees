import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Button from './Button'
import Dropdown from './Dropdown'

const HeaderContainer = styled.header`
  height: '70px';
  background: ${({ desktopBgColor, bgColor }) =>
    desktopBgColor || bgColor};
  @media only screen and (max-width: 960px) {
    background: ${({ smallDeviceBgColor, bgColor }) =>
      smallDeviceBgColor || bgColor};
  }
`
const Container = styled.div`
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Image = styled.img`
  width: 130px;
  height: 30px;
`

const Header = ({ navbar, desktopBgColor, smallDeviceBgColor }) => {
  const {
    bgColor,
    button,
    logo: {
      file: { url },
    },
  } = navbar
  return (
    <HeaderContainer
      desktopBgColor={desktopBgColor}
      smallDeviceBgColor={smallDeviceBgColor}
      bgColor={bgColor}
    >
      <Container>
        <Link to="/">
          <Image src={url} />
        </Link>
        <Dropdown />
        <Button to="/contact">{button}</Button>
      </Container>
    </HeaderContainer>
  )
}

export default Header
