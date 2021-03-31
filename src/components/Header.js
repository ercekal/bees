import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Button from './Button'
import Dropdown from './Dropdown'
import Chev from './Chevron'

const HeaderContainer = styled.header`
  height: '70px';
  position: ${({ indexPage }) => (indexPage ? 'fixed' : 'initial')};
  top: ${({ indexPage }) => (indexPage ? 0 : undefined)};
  width: 100%;
  background: ${({ indexPage, desktopBgColor, bgColor }) =>
    indexPage ? '' : desktopBgColor || bgColor};
  @media only screen and (max-width: 960px) {
    background: ${({ indexPage, smallDeviceBgColor, bgColor }) =>
      indexPage ? '' : smallDeviceBgColor || bgColor};
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

const SelectContainer = styled.div`
  width: 60px;
  margin-right: 20px;
`

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  margin-left: 1rem;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  position: relative;
  cursor: pointer;
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`

const Chevron = styled(Chev)`
  transform: rotate(${({ isOpen }) => (isOpen ? '270deg' : '90deg')});
  transition: transform 0.6s ease;
`

const Header = ({
  navbar,
  desktopBgColor,
  smallDeviceBgColor,
  indexPage,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('En')
  const {
    bgColor,
    button,
    logo: {
      file: { url },
    },
  } = navbar

  const toggleOpen = () => setIsOpen(!isOpen)

  const handleCountrySelect = name => {
    setIsOpen(false)
    setSelectedCountry(name)
  }
  return (
    <HeaderContainer
      desktopBgColor={desktopBgColor}
      smallDeviceBgColor={smallDeviceBgColor}
      bgColor={bgColor}
      indexPage={indexPage}
    >
      <Container>
        <Link to="/">
          <Image src={url} />
        </Link>
        <HeaderRight>
          <SelectContainer onClick={toggleOpen}>
            <Select onClick={toggleOpen}>
              {selectedCountry}
              <Chevron width={10} isOpen={isOpen} />
            </Select>
            {isOpen && (
              <Dropdown
                handleClose={setIsOpen}
                onClick={handleCountrySelect}
              />
            )}
          </SelectContainer>
          <Button to="/contact">{button}</Button>
        </HeaderRight>
      </Container>
    </HeaderContainer>
  )
}

export default Header
