import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import ImageWithTextAndSubtitle from './ImageWithTextAndSubtitle'
import './Perks.css'

// const Container = styled.section`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   padding-bottom: 3rem;
//   @media (min-width: 768px) {
//     padding-bottom: 0;
//     min-height: 600px;
//   }
// `

// const Upper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0 auto;
//   text-align: center;
//   padding-top: 3rem;
// `
// const Lower = styled.div`
//   display: flex;
//   justify-content: center;
//   position: relative;
//   background: linear-gradient(
//     to bottom,
//     white,
//     white 20%,
//     yellow 20%,
//     yellow 40%,
//     white 40%
//   );
//   @media (min-width: 768px) {
//     background: linear-gradient(
//       to bottom,
//       white,
//       white 30%,
//       yellow 30%,
//       yellow 50%,
//       white 50%
//     );
//   }
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

const Perks = ({ perks }) => {
  const { title, imageWithTitleAndSubtitles } = perks

  // const renderImageBoxes = () =>
  //   imageWithTitleAndSubtitles.map((item, i) => (
  //     <ImageWithTextAndSubtitle item={item} key={i} />
  //   ))

  const list = imageWithTitleAndSubtitles.map((item, i) => (
    <div className="cols3" key={i}>
      <div className="img-card">
        <div className="img-card-img">
          <img src={item.image.file.url} />
        </div>
        <div className="img-card-text">
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </div>
      </div>
    </div>
  ))

  return (
    <section>
      <div className="headline clearfix" style={{ display: 'block' }}>
        <Header className="cols24">
          <H2>{title}</H2>
        </Header>
      </div>

      <div className="background">
        <div
          className="carousel clearfix"
          style={{ display: 'block' }}
        >
          <div className="cols24">{list.map(l => l)}</div>
        </div>
      </div>
    </section>
    // <Container>
    //   <Upper>
    //     <BarlowText size="36px" lineHeight="43.2px">
    //       {title}
    //     </BarlowText>
    //   </Upper>
    //   <Lower>{renderImageBoxes()}</Lower>
    // </Container>
  )
}

export default Perks
