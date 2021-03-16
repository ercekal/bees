import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
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
        height: '60px',
      }}
    >
      <Container>
        <Link to="/">
          <img src={url} alt="#" />
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
