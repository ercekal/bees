/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'

const Container = styled.div`
  background-color: ${({ bgColor }) => bgColor || 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
  width: 100%;
  @media (min-width: 768px) {
    height: calc(100vh - 80px);
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const HeroColoredText = styled.h1`
  font-family: Barlow Semi Condensed;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 60px;
  letter-spacing: -0.05em;
  background-color: black;
  color: #fff;
  height: 90px;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  padding: 0 0.5rem;
  @media (min-width: 768px) {
    font-size: 5rem;
    line-height: 96px;
  }
`

const H1 = styled.h1`
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 50px;
  line-height: 60px;
  letter-spacing: -0.05em;
  @media (min-width: 768px) {
    font-size: 80px;
    line-height: 96px;
  }
`

const Subtitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

const Description = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    max-width: 500px;
  }
`

const Chevron = styled.img`
  cursor: pointer;
  padding-bottom: 2rem;
  @media (min-width: 768px) {
    position: absolute;
    bottom: 3rem;
  }
`
const HeroImageDesktop = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: initial;
    max-width: 100%;
  }
`

const HeroImageMobile = styled.img`
  display: initial;
  max-width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`

function Hero({ hero }) {
  const {
    heroDescription,
    heroText,
    heroColoredText,
    heroImageMobile,
    heroImageDesktop,
    bgColor,
  } = hero

  return (
    <Container bgColor={bgColor}>
      <HeroImageDesktop src={heroImageDesktop.file.url} />
      <HeroImageMobile src={heroImageMobile.file.url} />
      <TitleContainer>
        <H1>{heroText}</H1>{' '}
        <HeroColoredText> {heroColoredText}</HeroColoredText>
      </TitleContainer>
      <Description>
        <Subtitle>{heroDescription}</Subtitle>
      </Description>
      <Chevron src="../../chevron.svg" />
    </Container>
  )
}

export default Hero
