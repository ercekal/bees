import React from 'react'
import styled from 'styled-components'
import WorldMap from './WorldMap'
import Accordion from './Accordion'
import './Map.css'

const Section = styled.section`
  height: auto;
  @media (min-width: 1024px) {
    height: 900px;
    margin-bottom: 40px;
  }
  @media (min-width: 1700px) {
    height: 800px;
  }
`
const Header = styled.h2`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -3px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  margin-bottom: 20px;
`

const SubHeader = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
  @media (min-width: 1100px) {
    text-align: left;
  }
`

const H4 = styled.h4`
  font-size: 36px;
  line-height: 56px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  margin-bottom: -4px;
`

const P = styled.p`
  font-size: 14px;
  line-height: 16.2px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  margin-bottom: 0;
`

const Card = styled.div`
  width: 100%;
  float: left;
  background-color: #ffff00;
  margin-bottom: 8px;
  min-height: 120px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 35%;
  &:nth-of-type(1),
  &:nth-of-type(3) {
    margin-right: 2%;
  }
  @media (min-width: 700px) {
    height: 90px;
  }
  @media (min-width: 950px) {
    height: 120px;
  }
  @media (min-width: 1101px) {
    width: 49%;
    padding: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    height: 170px;
  }
  @media (min-width: 1240px) {
    padding: 20px 10px;
    height: 150px;
  }
`

const Map = ({ mapBoxes, countries }) => {
  const renderText = (item, i) => {
    const { text, bold } = item
    return bold ? <H4 key={i}>{text}</H4> : <P key={i}>{text}</P>
  }

  const list = mapBoxes.mapBoxes.map((item, i) => {
    return (
      <Card key={i}>
        {item.boxElement.map((el, i) => renderText(el, i))}
      </Card>
    )
  })

  return (
    <Section>
      <div className="interactive-maps">
        <WorldMap />
      </div>

      <div className="container clearfix">
        <div className="cols8-map">
          <Header>And we’re just getting started</Header>
          <SubHeader>
            Every day brings new challenges. Which is why, every day,
            we’re developing new ways to make BEES, better, for
            everyone.
          </SubHeader>
          <div className="boxes">{list.map(l => l)}</div>
          <Accordion
            countries={countries}
            title="And this is where you will find us"
          />
        </div>
      </div>
    </Section>
  )
}

export default Map
