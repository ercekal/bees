import React from 'react'
import styled from 'styled-components'
import ImageWithText from './ImageWithText'
import BarlowText from './BarlowText'

const Container = styled.section`
  display: flex;
  height: 100vh;
`

const Left = styled.div`
  width: 38%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Barlow Semi Condensed;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  padding-left: 3rem;
`

const Right = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const ThirdContentType = ({ third }) => {
  const { mainText, imageWithTextList } = third

  const renderImageBoxes = () =>
    imageWithTextList.map((item, i) => (
      <ImageWithText item={item} key={i} />
    ))

  return (
    <Container>
      <BarlowText size="36px" lineHeight="43.2px">
        {mainText}
      </BarlowText>
      <Right>{renderImageBoxes()}</Right>
    </Container>
  )
}

export default ThirdContentType
