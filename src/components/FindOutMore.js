import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'
import Button from './Button'

const Container = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  @media (min-width: 768px) {
    height: 30rem;
    padding: 0 5rem 0 0;
  }
  background: ${({ bgColor }) => bgColor || ''};
  width: 100%;
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

  return (
    <Container bgColor={bgColor}>
      <Left>
        <BarlowText size="4rem" lineHeight="77px">
          {title}
        </BarlowText>
        <WorkSans lineHeight="30px">{subtitle}</WorkSans>
        <Button>{button}</Button>
      </Left>
      <img src={`http:${bgImage.file.url}`} />
    </Container>
  )
}

export default FindOutMore
