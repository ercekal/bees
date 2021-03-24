import React from 'react'
import styled from 'styled-components'
import WorkSans from './WorkSans'
import BarlowText from './BarlowText'
import MapBox from './MapBox'
import Accordion from './Accordion'
import WorldMap from './WorldMap'
import './Third.css'

// const Container = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   padding: 2rem 1rem;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     position: relative;
//     justify-content: flex-start;
//     padding: 0 4rem;
//     height: 100vh;
//   }
//   @media (min-width: 1024px) {
//     height: 90vh;
//   }
// `

// const Mobile = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 95%;
//   @media (min-width: 768px) {
//     display: none;
//     flex-direction: column;
//   }
// `

// const Desktop = styled.div`
//   display: none;
//   @media (min-width: 768px) {
//     display: initial;
//   }
// `

// const LeftContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* justify-content: center; */
//   align-items: center;
//   text-align: center;
//   @media (min-width: 768px) {
//     width: 40%;
//     text-align: start;
//   }
//   @media (min-width: 1024px) {
//     position: absolute;
//     top: 0;
//     left: 0;
//   }
// `

// const Title = styled.div`
//   width: 60%;
//   margin-bottom: 2rem;
//   @media (min-width: 768px) {
//     display: none;
//   }
//   @media (min-width: 1024px) {
//     display: initial;
//   }
// `

// const TabletTitle = styled.div`
//   display: none;
//   @media (min-width: 768px) {
//     display: flex;
//     text-align: center;
//     width: 80%;
//     padding-bottom: 2rem;
//   }
//   @media (min-width: 1024px) {
//     display: none;
//   }
// `

// const SubTitle = styled.div`
//   width: 60%;
//   @media (min-width: 768px) {
//     width: 60%;
//   }
// `

// const BoxesContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 2rem 0;
//   @media (min-width: 768px) {
//     position: absolute;
//     left: 4rem;
//     flex-direction: row;
//     flex-wrap: wrap;
//   }
// `

const Header = styled.div`
  margin-right: 4.16%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 360px;
`

const H2 = styled.h2`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -3px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  text-align: left;
`
const Card = styled.div`
  background-color: #ffff00;
  margin: 0 10px 10px 0;
  padding: 1rem;
  width: 230px;
  /* height: 200px; */
`

const renderText = (item, i) => {
  const { text, bold } = item
  return bold ? <H2 key={i}>{text}</H2> : <p key={i}>{text}</p>
}

const Map = ({ mapBoxes, countries }) => {
  const list = mapBoxes.mapBoxes.map((item, i) => {
    return (
      <div style={{ float: 'left' }} key={i}>
        <Card className="img-card">
          <div className="img-card-text">
            {item.boxElement.map((el, i) => renderText(el, i))}
          </div>
        </Card>
      </div>
    )
  })

  return (
    <section style={{ display: 'flex' }}>
      <div style={{ maxWidth: '70%' }}>
        <div
          className="headline clearfix"
          style={{ display: 'block' }}
        >
          <Header className="cols24">
            <H2 style={{ paddingBottom: '20px' }}>
              And we’re just getting started
            </H2>
            <p style={{ paddingBottom: '20px' }}>
              Every day brings new challenges. Which is why, every
              day, we’re developing new ways to make BEES, better, for
              everyone.
            </p>
          </Header>
        </div>

        <div className="headline">
          <div className="clearfix" style={{ display: 'block' }}>
            <div className="cols24">{list.map(l => l)}</div>
          </div>
        </div>
      </div>
      <WorldMap />
    </section>
    // <Container>
    //   <LeftContainer>
    //     <Title>
    //       <BarlowText size="4rem" lineHeight="76.8px">
    //         And we’re just getting started
    //       </BarlowText>
    //     </Title>
    //     <TabletTitle>
    //       <BarlowText size="2rem" lineHeight="36px">
    //         And we’re just getting started
    //       </BarlowText>
    //     </TabletTitle>
    //     <SubTitle>
    //       <WorkSans>
    //         Every day brings new challenges. Which is why, every day,
    //         we’re developing new ways to make BEES, better, for
    //         everyone.
    //       </WorkSans>
    //     </SubTitle>
    //     <Desktop>
    //       <BoxesContainer>
    //         {mapBoxes.mapBoxes.map((item, i) => (
    //           <MapBox items={item.boxElement} key={i} />
    //         ))}
    //       </BoxesContainer>
    //     </Desktop>
    //     <Mobile>
    //       <BoxesContainer>
    //         {mapBoxes.mapBoxes.map((item, i) => (
    //           <MapBox items={item.boxElement} key={i} />
    //         ))}
    //       </BoxesContainer>
    //       <Accordion
    //         title="And this is where you will find us"
    //         countries={countries}
    //       />
    //     </Mobile>
    //   </LeftContainer>
    //   <WorldMap />
    // </Container>
  )
}

export default Map
