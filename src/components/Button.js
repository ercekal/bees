import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import BarlowText from './BarlowText'

const Container = styled.button`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background: #000000;
  padding: 0 5px;
  height: 39px;
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
