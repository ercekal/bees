import React from 'react';
import styled from 'styled-components'
import Button from './button'
import BarlowText from './BarlowText'

const Container = styled.div`
    height: calc(100vh - 60px);
    background-color: ${({bgColor}) => bgColor ? bgColor : 'white'};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
    width: 440px;
    font-family: Work Sans;
    font-size: 1rem;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
`

function Hero({ hero }) {
    const { heroButton,
        heroDescription,
        heroText,
        heroColoredText,
        hero: {
            file: {
                url
            }
        },
        bgColor,
    } = hero;

    return (
        <Container bgColor={bgColor}>
            <img src={url} alt='#' />
            <TitleContainer>
                <BarlowText>{heroText}</BarlowText>{' '}<HeroColoredText>{' '}{heroColoredText}</HeroColoredText>
            </TitleContainer>
            <Description>{heroDescription}</Description>
            <Button>{heroButton}</Button>
        </Container>
    );
}

export default Hero;