import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  background: url(${({ bgImage }) => (bgImage ? bgImage : '')}) center
      no-repeat,
    ${({ bgColor }) => (bgColor ? bgColor : '')};
  width: 100%;
  height: 100vh;
`

const Grow = ({ grow }) => {
  const { bgColor, text, bgImage } = grow

  return (
    <Container bgColor={bgColor} bgImage={'http:' + bgImage.file.url}>
      <BarlowText size="5rem" lineHeight="6rem">
        {text.text}
      </BarlowText>
    </Container>
  )
}

export default Grow
