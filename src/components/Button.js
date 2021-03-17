import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import BarlowText from './BarlowText'

const Container = styled.button`
  background: #000000;
  width: fit-content;
  padding: 1rem 0.5rem;
`

const Button = ({ children }) => (
  <Container>
    <Link to="/contact">
      <BarlowText size="1.25rem" color="#ffff00">
        {children}
      </BarlowText>
    </Link>
  </Container>
)

export default Button
