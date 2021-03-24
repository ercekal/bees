import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem 0.5rem;
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
  width: 100vw;
  @media (min-width: 768px) {
    background: url(${({ image }) => (image ? `http:${image}` : '')})
        33% no-repeat,
      linear-gradient(
        to right,
        ${({ leftBgColor }) => leftBgColor || 'red'} 0%,
        ${({ leftBgColor }) => leftBgColor || 'red'} 40%,
        white 40%,
        white 100%
      );
    width: 100%;
    position: relative;
    padding: 0 0 0 4rem;
    background-size: contain;
  }
  transition: background-color 1s linear;
  height: 700px;
`

const Logo = styled.img`
  width: 114px;
  height: 35px;
  margin-bottom: 1rem;
`

const Upper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Lower = styled.div`
  display: flex;
  width: 100%;
`

const LowerContent = styled.div`
  width: 100%;
  padding-right: 2rem;
`

const Number = styled.div`
  display: flex;
  margin-top: 1rem;
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
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
`

const DesktopLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 38%;
  padding-left: 4rem;
  /* position: absolute;
  left: 100px;
  top: calc(100vh / 4); */
`

const DesktopRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 62%;
  margin-right: 2rem;
  @media (min-width: 768px) {
    margin-right: 0;
    align-items: center;
  }
`

const DesktopUpper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  width: 250px;
`

const DesktopList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  align-items: baseline;
  margin-bottom: 3rem;
  &:last-child {
    margin-bottom: 0;
  }
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

const MobileTitle = styled.div`
  margin-bottom: 0.5rem;
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
              <MobileTitle>
                <WorkSans size="20px" fontWeight="600">
                  {headerSubtitleFirst}
                </WorkSans>
              </MobileTitle>
              <WorkSans size="14px">
                {headerDescriptionFirst}
              </WorkSans>
            </LowerContent>
            <LowerContent>
              <MobileTitle>
                <WorkSans size="20px" fontWeight="600">
                  {headerSubtitleSecond}
                </WorkSans>
              </MobileTitle>
              <WorkSans size="14px">
                {headerDescriptionSecond}
              </WorkSans>
            </LowerContent>
          </Lower>
          <Number>
            <WorkSans fontWeight="600" size="14px">
              {number + 1}
            </WorkSans>
            <Slash>
              <WorkSans size="14px">/</WorkSans>
            </Slash>
            <WorkSans size="14px">{total}</WorkSans>
          </Number>
        </Upper>
      </Mobile>
      <Desktop>
        <DesktopLeft>
          <WorkSans>{number + 1}</WorkSans>
          <DesktopSlider ratio={((number + 1) / total) * 100} />
          <WorkSans>{total}</WorkSans>
        </DesktopLeft>
        <DesktopRight>
          <DesktopUpper>
            <Logo src={headerLogo.file.url} />
            <BarlowText size="36px" lineHeight="43.2px">
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
