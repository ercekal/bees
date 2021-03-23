import React from 'react'
import styled from 'styled-components'
import ImageWithText from './ImageWithText'
import BarlowText from './BarlowText'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4rem 0;
`

const Left = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
`

const MobileUpper = styled.div`
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
    width: 100%;
  }
`

const Right = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
`

const RightTop = styled.div`
  display: flex;
`

const RightBottom = styled.div`
  display: flex;
  padding-left: 1.5rem;
`

const ThirdContentType = ({ third }) => {
  const { mainText, imageWithTextList } = third

  const renderImageBoxes = arr => {
    if (arr) {
      return arr.map((item, i) => (
        <ImageWithText item={item} key={i} number={i} />
      ))
    }
  }

  return (
    <Container>
      <Mobile>
        <MobileUpper>
          <BarlowText size="36px" lineHeight="43.2px">
            {mainText}
          </BarlowText>
        </MobileUpper>
        {renderImageBoxes()}
      </Mobile>
      <Desktop>
        <Left>
          <BarlowText size="3rem" lineHeight="57.6px">
            {mainText}
          </BarlowText>
        </Left>
        <Right>
          <RightTop>
            {renderImageBoxes(imageWithTextList.slice(0, 2))}
          </RightTop>
          <RightBottom>
            {renderImageBoxes(imageWithTextList.slice(2, 4))}
          </RightBottom>
        </Right>
      </Desktop>
    </Container>
  )
}

export default ThirdContentType
