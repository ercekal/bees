import React from 'react'
import styled from 'styled-components'
import ImageWithText from './ImageWithText'
import BarlowText from './BarlowText'
import './Third.css'

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   padding: 4rem 0;
// `

// const Left = styled.div`
//   width: 40%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0 4rem;
// `

// const MobileUpper = styled.div`
//   width: 40%;
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   margin: 0 auto 3rem;
// `

// const Mobile = styled.div`
//   @media (min-width: 768px) {
//     display: none;
//   }
// `
// const Desktop = styled.div`
//   display: none;
//   @media (min-width: 768px) {
//     display: flex;
//     width: 100%;
//   }
// `

// const Right = styled.div`
//   width: 60%;
//   display: flex;
//   flex-wrap: wrap;
//   max-width: 1100px;
// `

// const RightTop = styled.div`
//   display: flex;
// `

// const RightBottom = styled.div`
//   display: flex;
//   padding-left: 1.5rem;
// `

const Header = styled.div`
  margin-right: 4.16%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const H2 = styled.h2`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -3px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
`

const H4 = styled.h4`
  font-size: 20px;
  line-height: 30px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
`

const ThirdContentType = ({ third }) => {
  const { mainText, imageWithTextList } = third

  let list = imageWithTextList.map((item, i) => (
    <div className="photo-box" key={i}>
      <div className="photo-box-img">
        <img src={'http:' + item.image.file.url} />
      </div>
      <div className="photo-box-text">
        <H4>{item.text}</H4>
      </div>
    </div>
  ))

  return (
    <div className="container clearfix">
      <Header className="cols8">
        <H2>{mainText}</H2>
      </Header>
      <div className="cols14">{list.map(l => l)}</div>
    </div>
  )
}

export default ThirdContentType

{
  /* <Container>
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
    </Container>  */
}
