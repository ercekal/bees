import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  padding: 2rem 2.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Image = styled.img`
  width: 100px;
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
        <Button>{button}</Button>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
