import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import Button from './button'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => (bgColor ? bgColor : '')};
  width: 100%;
  height: 30rem;
  padding: 0 5rem 0 0;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
`

const FindOutMore = ({ findOutMore }) => {
  const { title, subtitle, button, bgColor, bgImage } = findOutMore
  console.log('bgImage: ', bgImage)

  return (
    <Container bgColor={bgColor}>
      <Left>
        <BarlowText size="4rem">{title}</BarlowText>
        <p>{subtitle}</p>
        <Button>{button}</Button>
      </Left>
      <img src={'http:' + bgImage.file.url} />
    </Container>
  )
}

export default FindOutMore
