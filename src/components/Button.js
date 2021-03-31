import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.button`
  background: ${({ bgColor }) => bgColor || '#000000'};
  color: ${({ fontColor }) => fontColor || '#ffff00'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  width: ${({ width }) => (width ? width : 'fit-content')};
  border: 0;
  font-size: 20px;
  line-height: 24px;
  font-family: Barlow Semi Condensed;
  letter-spacing: -0.05em;
  font-weight: 600;
`
const ButtonLink = styled(Link)`
  background: ${({ bgColor }) => bgColor || '#000000'};
  color: ${({ fontColor }) => fontColor || '#ffff00'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  width: ${({ width }) => (width ? width : 'fit-content')};
  border: 0;
  font-size: 20px;
  line-height: 24px;
  font-family: Barlow Semi Condensed;
  letter-spacing: -0.05em;
  font-weight: 600;
  text-decoration: none;
`

const Button = ({ children, width, to }) => {
  if (to) {
    return <ButtonLink to={to}>{children}</ButtonLink>
  }
  return <Container width={width}>{children}</Container>
}

export default Button
