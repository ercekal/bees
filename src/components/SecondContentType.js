import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background: url(${({ image }) => (image ? `http:${image}` : '')})
      center no-repeat,
    linear-gradient(
      to bottom,
      ${({ leftBgColor }) => leftBgColor || 'red'} 0%,
      ${({ leftBgColor }) => leftBgColor || 'red'} 50%,
      white 50%,
      white 100%
    );
  background-size: ${({ number }) =>
    number === 1 ? '300px' : '500px'};
  @media (min-width: 768px) {
    background: url(${({ image }) => (image ? `http:${image}` : '')})
        33% no-repeat,
      linear-gradient(
        to right,
        ${({ leftBgColor }) => leftBgColor || 'red'} 0%,
        ${({ leftBgColor }) => leftBgColor || 'red'} 38%,
        white 38%,
        white 100%
      );
    width: 100%;
    position: relative;
  }
  transition: background-color 1s linear;
  height: 100vh;
  width: 100vh;
`

const Logo = styled.img`
  width: 114px;
  height: 35px;
  margin-bottom: 2rem;
`

const Upper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Lower = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const LowerContent = styled(Upper)`
  width: 40%;
`

const Number = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`

const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`

const Desktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    width: 100%;
  }
`
const DesktopRight = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 125px;
  top: 150px;
`

const DesktopList = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100px;
  align-items: baseline;
  margin: 2rem 0;
`

const DesktopUpper = styled.div`
  display: flex;
  flex-direction: column;
`

const DesktopSlider = styled.div`
  display: flex;
  width: 5px;
  height: 200px;
  background: linear-gradient(
    to bottom,
    black 0%,
    black ${({ ratio }) => ratio || 0}%,
    rgba(0, 0, 0, 0.1) ${({ ratio }) => ratio || 0}%,
    rgba(0, 0, 0, 0.1) 100%
  );
`

const DesktopSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 100px;
  top: 150px;
`

const Title = styled.div`
  margin-bottom: 1rem;
`

const Slash = styled.p`
  padding: 0 0.25rem 0 0.5rem;
`

const SecondContentType = ({ item, number, total }) => {
  const {
    headerLogo,
    secondaryContentImage,
    headerSubtitleFirst,
    headerDescriptionFirst,
    headerSubtitleSecond,
    headerDescriptionSecond,
    headerTitle,
    leftBgColor,
  } = item
  return (
    <Container
      leftBgColor={leftBgColor}
      image={secondaryContentImage.file.url}
      number={number}
    >
      <Mobile>
        <Upper>
          <Logo src={headerLogo.file.url} />
          <BarlowText size="28px" lineHeight="34px">
            {headerTitle}
          </BarlowText>
        </Upper>
        <Upper>
          <Lower>
            <LowerContent>
              <WorkSans size="20px">{headerSubtitleFirst}</WorkSans>
              <WorkSans size="14px">
                {headerDescriptionFirst}
              </WorkSans>
            </LowerContent>
            <LowerContent>
              <WorkSans size="20px">{headerSubtitleSecond}</WorkSans>
              <WorkSans size="14px">
                {headerDescriptionSecond}
              </WorkSans>
            </LowerContent>
          </Lower>
          <Number>
            <WorkSans fontWeight="600" size="14px">
              {number + 1}
            </WorkSans>
            <Slash>/</Slash>
            <WorkSans size="14px">{total}</WorkSans>
          </Number>
        </Upper>
      </Mobile>
      <Desktop>
        <DesktopSliderContainer>
          <WorkSans>{number + 1}</WorkSans>
          <DesktopSlider ratio={((number + 1) / total) * 100} />
          <WorkSans>{total}</WorkSans>
        </DesktopSliderContainer>
        <DesktopRight>
          <DesktopUpper>
            <Logo src={headerLogo.file.url} />
            <BarlowText size="28px" lineHeight="34px">
              {headerTitle}
            </BarlowText>
          </DesktopUpper>
          <DesktopList>
            <Title>
              <WorkSans
                size="24px"
                lineHeight="2rem"
                fontWeight="600"
              >
                {headerSubtitleFirst}
              </WorkSans>
            </Title>
            <WorkSans size="16px">{headerDescriptionFirst}</WorkSans>
          </DesktopList>
          <DesktopList>
            <Title>
              <WorkSans
                size="24px"
                lineHeight="2rem"
                fontWeight="600"
              >
                {headerSubtitleSecond}
              </WorkSans>
            </Title>
            <WorkSans size="16px">{headerDescriptionSecond}</WorkSans>
          </DesktopList>
        </DesktopRight>
      </Desktop>
    </Container>
  )
}

export default SecondContentType
