import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Button from './Button'
import Dropdown from './Dropdown'

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

const Header = ({ navbar }) => {
  const {
    bgColor,
    button,
    logo: {
      file: { url },
    },
  } = navbar
  return (
    <header
      style={{
        background: bgColor,
        height: '70px',
      }}
    >
      <Container>
        <Link to="/">
          <Image src={url} />
        </Link>
        <Dropdown />
        <Button to="/contact">{button}</Button>
      </Container>
    </header>
  )
}

export default Header
