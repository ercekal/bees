import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background: url(${({ bgImage }) => bgImage || ''}) center no-repeat,
    ${({ bgColor }) => bgColor || ''};
  width: 100%;
  background-size: cover;
  @media (min-width: 768px) {
    height: 100vh;
  }
`

const Grow = ({ grow }) => {
  const { bgColor, text, bgImage } = grow

  return (
    <Container bgColor={bgColor} bgImage={`http:${bgImage.file.url}`}>
      <BarlowText size="5rem" lineHeight="6rem">
        {text.text}
      </BarlowText>
    </Container>
  )
}

export default Grow
