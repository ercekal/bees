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
  background: url(${({ image }) => (image ? 'http:' + image : '')})
      center no-repeat,
    linear-gradient(
      to bottom,
      ${({ leftBgColor }) => (leftBgColor ? leftBgColor : 'red')} 0%,
      ${({ leftBgColor }) => (leftBgColor ? leftBgColor : 'red')} 50%,
      white 50%,
      white 100%
    );
  background-size: 500px;
  @media (min-width: 768px) {
    background: url(${({ image }) => (image ? 'http:' + image : '')})
        center no-repeat,
      linear-gradient(
        to right,
        ${({ leftBgColor }) => (leftBgColor ? leftBgColor : 'red')} 0%,
        ${({ leftBgColor }) => (leftBgColor ? leftBgColor : 'red')}
          38%,
        white 38%,
        white 100%
      );
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
`

const SecondContentType = ({ item }) => {
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
    >
      <Upper>
        <Logo src={headerLogo.file.url} />
        <BarlowText size="28px" lineHeight="34px">
          {headerTitle}
        </BarlowText>
      </Upper>
      <Lower>
        <Upper>
          <WorkSans size="20px">{headerSubtitleFirst}</WorkSans>
          <WorkSans size="14px">{headerDescriptionFirst}</WorkSans>
        </Upper>
        <Upper>
          <WorkSans size="20px">{headerSubtitleSecond}</WorkSans>
          <WorkSans size="14px">{headerDescriptionSecond}</WorkSans>
        </Upper>
      </Lower>
    </Container>

    // <Container
    //   leftBgColor={leftBgColor}
    //   image={secondaryContentImage.file.url}
    // >
    //   <Logo src={headerLogo.file.url} />
    //   {headerTitle}
    //   {/* <img src={secondaryContentImage.file.url} /> */}
    //   <p>{headerSubtitleFirst}</p>
    //   <p>{headerDescriptionFirst}</p>
    //   <p>{headerSubtitleSecond}</p>
    //   <p>{headerDescriptionSecond}</p>
    // </Container>
  )
}

export default SecondContentType
