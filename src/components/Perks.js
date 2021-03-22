import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import ImageWithTextAndSubtitle from './ImageWithTextAndSubtitle'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    height: 100vh;
  }
`

const Upper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  padding-top: 3rem;
`
const Lower = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background: linear-gradient(
    to bottom,
    white,
    white 20%,
    yellow 20%,
    yellow 40%,
    white 40%
  );
  @media (min-width: 768px) {
    background: linear-gradient(
      to bottom,
      white,
      white 30%,
      yellow 30%,
      yellow 50%,
      white 50%
    );
  }
`

const Perks = ({ perks }) => {
  const { title, imageWithTitleAndSubtitles } = perks

  const renderImageBoxes = () =>
    imageWithTitleAndSubtitles.map((item, i) => (
      <ImageWithTextAndSubtitle item={item} key={i} />
    ))

  return (
    <Container>
      <Upper>
        <BarlowText size="36px" lineHeight="43.2px">
          {title}
        </BarlowText>
      </Upper>
      <Lower>{renderImageBoxes()}</Lower>
    </Container>
  )
}

export default Perks
