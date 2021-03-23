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

// const HeroImage = styled.div`
//   height: 450px;
//   width: 100%;
//   margin: 0 auto;
//   padding-bottom: 3rem;
//   background: url(${({ heroImageMobile }) =>
//       heroImageMobile ? `http:${heroImageMobile}` : ''})
//     center no-repeat;
//   @media (min-width: 768px) {
//     height: 350px;
//     width: 90%;
//     padding-bottom: 0;
//     background: url(${({ heroImageDesktop }) =>
//         heroImageDesktop ? `http:${heroImageDesktop}` : ''})
//       center no-repeat;
//   }
// `

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
        <BarlowText lineHeight="6rem" size="5rem">
          {heroText}
        </BarlowText>{' '}
        <HeroColoredText> {heroColoredText}</HeroColoredText>
      </TitleContainer>
      <Description>
        <WorkSans>{heroDescription}</WorkSans>
      </Description>
      <Chevron src="../../chevron.svg" />
    </Container>
  )
}

export default Hero
