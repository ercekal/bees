import React from 'react'
import styled from 'styled-components'
import ImageWithText from './ImageWithText'
import BarlowText from './BarlowText'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  @media (min-width: 768px) {
    height: 100vh;
  }
`

const Left = styled.div`
  width: 38%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem 0 4rem;
`

const Upper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto 3rem;
`

const Mobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`
const Desktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`

const Right = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 75%;
`

const ThirdContentType = ({ third }) => {
  const { mainText, imageWithTextList } = third

  const renderImageBoxes = () =>
    imageWithTextList.map((item, i) => (
      <ImageWithText item={item} key={i} number={i} />
    ))

  return (
    <Container>
      <Mobile>
        <Upper>
          <BarlowText size="36px" lineHeight="43.2px">
            {mainText}
          </BarlowText>
        </Upper>
        {renderImageBoxes()}
      </Mobile>
      <Desktop>
        <Left>
          <BarlowText size="3rem" lineHeight="57.6px">
            {mainText}
          </BarlowText>
        </Left>
        <Right>{renderImageBoxes()}</Right>
      </Desktop>
    </Container>
  )
}

export default ThirdContentType
