import React from 'react'
import styled from 'styled-components'
import './Map.css'
import WorldMap from './WorldMap'

const Section = styled.section`
  height: 900px;

  @media (min-width: 1024px) {
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
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  margin-bottom: 0;
`

const H4 = styled.h4`
  font-size: 36px;
  line-height: 56px;
  letter-spacing: -2px;
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
  width: 49%;
  float: left;
  background-color: #ffff00;
  margin-bottom: 8px;
  min-height: 120px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  &:nth-of-type(1),
  &:nth-of-type(3) {
    margin-right: 2%;
  }
  @media (min-width: 700px) {
    height: 160px;
  }
  @media (min-width: 950px) {
    height: 120px;
  }
  @media (min-width: 1100px) {
    height: 130px;
  }
`

const Map = ({ mapBoxes }) => {
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
        <div className="cols8-map" style={{ marginRight: '4.16%' }}>
          <Header>And we’re just getting started</Header>
          <SubHeader>
            Every day brings new challenges. Which is why, every day,
            we’re developing new ways to make BEES, better, for
            everyone.
          </SubHeader>
          <div className="boxes">{list.map(l => l)}</div>
        </div>
      </div>
    </Section>
  )
}

export default Map
