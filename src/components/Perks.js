import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import ImageWithTextAndSubtitle from './ImageWithTextAndSubtitle'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const Upper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 768px) {
    padding-top: 3rem;
  }
`
const Lower = styled.div`
  display: flex;
  justify-content: center;
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
        <BarlowText size="3rem" lineHeight="58px">
          {title}
        </BarlowText>
      </Upper>
      <Lower>{renderImageBoxes()}</Lower>
    </Container>
  )
}

export default Perks
