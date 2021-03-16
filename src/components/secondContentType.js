import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  background: url(${({ image }) => (image ? 'http:' + image : '')}) 
    center no-repeat, linear-gradient(
      to right,
      ${({ leftBgColor }) => (leftBgColor ? leftBgColor : 'red')} 0%,
      ${({ leftBgColor }) => (leftBgColor ? leftBgColor : 'red')} 38%,
      white 38%,
      white 100%
    );
  transition: background-color 1s linear;
  height: 100vh;
  width: 100vh;
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
  console.log(
    'secondaryContentImage.file.url: ',
    'http:' + secondaryContentImage.file.url,
  )
  console.log('type : ', typeof secondaryContentImage.file.url)
  return (
    <Container
      leftBgColor={leftBgColor}
      image={secondaryContentImage.file.url}
    >
      {headerTitle}
      {/* <img src={headerLogo.file.url} /> */}
      {/* <img src={secondaryContentImage.file.url} /> */}
      <p>{headerSubtitleFirst}</p>
      <p>{headerDescriptionFirst}</p>
      <p>{headerSubtitleSecond}</p>
      <p>{headerDescriptionSecond}</p>
    </Container>
  )
}

export default SecondContentType
