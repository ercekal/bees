import React from 'react'
import styled from 'styled-components'
import WorkSans from './WorkSans'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
  height: 180px;
  margin: 1rem;
  padding: 1rem;
  background-color: white;
  @media (min-width: 768px) {
    width: 180px;
    height: 180px;
    margin: 2rem;
    padding-left: 1rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor || ''};
  height: 70px;
  justify-content: flex-start;
  @media (min-width: 768px) {
    padding: 0;
    justify-content: flex-start;
  }
`

const MobileText = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

const DesktopText = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: initial;
    padding-top: 1rem;
  }
`

const Image = styled.img`
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    width: 60px;
  }
`

const IconWithText = ({ item }) => {
  const {
    text,
    image: {
      file: { url },
    },
  } = item
  return (
    <Container>
      <Image src={url} />
      <TextContainer>
        <MobileText>
          <WorkSans size="18px" lineHeight="28px" fontWeight="600">
            {text}
          </WorkSans>
        </MobileText>
        <DesktopText>
          <WorkSans size="20px" lineHeight="30px" fontWeight="600">
            {text}
          </WorkSans>
        </DesktopText>
      </TextContainer>
    </Container>
  )
}

export default IconWithText
