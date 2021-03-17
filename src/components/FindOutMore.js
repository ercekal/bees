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
    flex-direction: row;
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

const MobileText = styled.div`
  width: 30%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  @media (min-width: 768px) {
    display: none;
  }
`

const DesktopText = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 4rem;
    height: 150px;
    justify-content: space-around;
  }
  /* width: 30%;
  text-align: center; */
`

const ButtonContainer = styled(Button)``

const Image = styled.img`
  height: 200px;
  @media (min-width: 768px) {
    height: 300px;
  }
`

const FindOutMore = ({ findOutMore }) => {
  const { title, subtitle, button, bgColor, bgImage } = findOutMore

  return (
    <Container bgColor={bgColor}>
      <Left>
        <MobileText>
          <BarlowText size="2.6rem" lineHeight="50px">
            {title}
          </BarlowText>
          <WorkSans lineHeight="20px">{subtitle}</WorkSans>
        </MobileText>
        <DesktopText>
          <BarlowText size="4rem" lineHeight="77px">
            {title}
          </BarlowText>
          <WorkSans lineHeight="30px">{subtitle}</WorkSans>
          {/* <ButtonContainer>{button}</ButtonContainer> */}
        </DesktopText>
        <ButtonContainer>{button}</ButtonContainer>
      </Left>
      <Image src={`http:${bgImage.file.url}`} />
    </Container>
  )
}

export default FindOutMore
