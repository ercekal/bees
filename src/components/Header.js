import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Button from './Button'
import Dropdown from './Dropdown'

const Container = styled.div`
  padding: 2rem 2.5rem 1rem;
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
        height: '80px',
      }}
    >
      <Container>
        <Link to="/">
          <Image src={url} />
        </Link>
        <Dropdown />
        <Button>{button}</Button>
      </Container>
    </header>
  )
}

export default Header
