/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'
import Chevron from '../../public/icons/chevron.svg'

const Container = styled.div`
  height: calc(100vh - 60px);
  background-color: ${({ bgColor }) => bgColor || 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const HeroImage = styled.div`
  height: 450px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 3rem;
  background: url(${({ heroImageMobile }) =>
      heroImageMobile ? `http:${heroImageMobile}` : ''})
    center no-repeat;
  @media (min-width: 768px) {
    width: 90%;
    padding-bottom: 0;
    background: url(${({ heroImageDesktop }) =>
        heroImageDesktop ? `http:${heroImageDesktop}` : ''})
      center no-repeat;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const HeroColoredText = styled.div`
  font-family: Barlow Semi Condensed;
  font-style: normal;
  font-weight: 600;
  font-size: 5rem;
  line-height: 96px;
  letter-spacing: -0.05em;
  background-color: black;
  color: #fff;
  height: 90px;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  padding: 0 0.5rem;
`

const Description = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
`

function Hero({ hero }) {
  const {
    heroButton,
    heroDescription,
    heroText,
    heroColoredText,
    heroImageMobile,
    heroImageDesktop,
    bgColor,
  } = hero

  return (
    <Container bgColor={bgColor}>
      <HeroImage
        heroImageDesktop={heroImageDesktop.file.url}
        heroImageMobile={heroImageMobile.file.url}
      />
      <TitleContainer>
        <BarlowText lineHeight="6rem" size="5rem">
          {heroText}
        </BarlowText>{' '}
        <HeroColoredText> {heroColoredText}</HeroColoredText>
      </TitleContainer>
      <Description>
        <WorkSans>{heroDescription}</WorkSans>
      </Description>
      <Button>{heroButton}</Button>
    </Container>
  )
}

export default Hero
