import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.button`
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  width: ${({ width }) => (width ? width : 'fit-content')};
  border: 0;
  color: #ffff00;
  font-size: 20px;
  line-height: 24px;
  font-family: Barlow Semi Condensed;
  letter-spacing: -0.05em;
  font-weight: 600;
`
const ButtonLink = styled(Link)`
  text-decoration: none;
  color: #ffff00;
  font-size: 20px;
  line-height: 24px;
  font-family: Barlow Semi Condensed;
  letter-spacing: -0.05em;
  font-weight: 600;
`

const Button = ({ children, width, to }) => {
  return (
    <Container width={width}>
      {to ? <ButtonLink to={to}>{children}</ButtonLink> : children}
    </Container>
  )
}

export default Button
