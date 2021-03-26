import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import BarlowText from './BarlowText'

const Container = styled.button`
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  width: ${({ width }) => (width ? width : 'fit-content')};
  border: 0;
`
const ButtonLink = styled(Link)`
  text-decoration: none;
`

const Button = ({ children, width, to }) => {
  return (
    <Container width={width}>
      <ButtonLink to={to || '/contact'}>
        <BarlowText size="1.25rem" color="#ffff00">
          {children}
        </BarlowText>
      </ButtonLink>
    </Container>
  )
}

export default Button
