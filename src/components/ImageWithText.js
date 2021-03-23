import React from 'react'
import styled from 'styled-components'
import WorkSans from './WorkSans'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto 2rem;
  @media (min-width: 768px) {
    width: 11rem;
    height: 14px;
    margin-right: 1rem;
    margin-bottom: 0.25rem;
  }
  @media (min-width: 1024px) {
    width: 15rem;
    height: 280px;
    margin-right: 2rem;
    margin-bottom: 0.25rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor || ''};
  height: 70px;
  padding: 2rem 3rem 2rem 2rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    padding: 15px 22px;
  }
`

const MobileText = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

const TabletText = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: initial;
    width: 90%;
  }
`

const DesktopText = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: initial;
    width: 90%;
  }
`

const Image = styled.img`
  width: 100%;
`

const imageWithText = ({ item, number }) => {
  const {
    text,
    textBgColor,
    image: {
      file: { url },
    },
  } = item
  return (
    <Container number={number}>
      <Image src={url} />
      <TextContainer bgColor={textBgColor}>
        <MobileText>
          <WorkSans size="18px" lineHeight="20px" fontWeight="600">
            {text}
          </WorkSans>
        </MobileText>
        <TabletText>
          <WorkSans size="18px" lineHeight="20px" fontWeight="600">
            {text}
          </WorkSans>
        </TabletText>
        <DesktopText>
          <WorkSans size="20px" lineHeight="30px" fontWeight="600">
            {text}
          </WorkSans>
        </DesktopText>
      </TextContainer>
    </Container>
  )
}

export default imageWithText
