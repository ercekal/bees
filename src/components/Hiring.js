import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Title = styled.h3`
  font-size: 48px;
  line-height: 57px;
  font-family: Barlow Semi Condensed;
  letter-spacing: -0.05em;
  font-weight: 600;
  margin-bottom: 20px;
`

const P = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  margin-bottom: 16px;
`

const Hiring = ({ element }) => {
  const { title, description, button, link } = element
  return (
    <>
      <Title>{title}</Title>
      {description.map((el, i) => (
        <P key={i}>{el}</P>
      ))}
      <Button to="#">{button}</Button>
      <br />
      <Button>{link}</Button>
    </>
  )
}

export default Hiring
