import React from 'react'
import styled from 'styled-components'
import './Map.css'
import WorldMap from './WorldMap'

const Header = styled.h2`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -3px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  margin-bottom: 20px;
`

const H2 = styled.h2`
  font-size: 36px;
  line-height: 43.2px;
  letter-spacing: -3px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  margin-bottom: 0;
`

const P = styled.p`
  font-size: 14px;
  line-height: 16.2px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  margin-bottom: 0;
`

const Card = styled.div`
  /* display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #ffff00;
   */

  /* margin: 0 10px 10px 0; */
  /* padding: 1rem; */
  /* width: 230px; */
  /* height: 150px; */
`

const Map = ({ mapBoxes }) => {
  const renderText = (item, i) => {
    const { text, bold } = item
    return bold ? <H2 key={i}>{text}</H2> : <P key={i}>{text}</P>
  }

  const list = mapBoxes.mapBoxes.map((item, i) => {
    return (
      <div className="box">
        {item.boxElement.map((el, i) => renderText(el, i))}
        {/* <h2>Over 1 Million</h2>
          <p>Retailers</p> */}
      </div>
      // <div style={{ float: 'left' }} key={i}>
      //   <Card className="img-card">
      //     <div className="img-card-text">
      //       {item.boxElement.map((el, i) => renderText(el, i))}
      //     </div>
      //   </Card>
      // </div>
    )
  })

  return (
    <section id="four-boxes" style={{ height: '900px' }}>
      <div className="interactive-maps">
        <WorldMap />
      </div>

      <div className="container clearfix">
        <div className="cols8-map" style={{ marginRight: '4.16%' }}>
          <Header>And we’re just getting started</Header>
          <p>
            Every day brings new challenges. Which is why, every day,
            we’re developing new ways to make BEES, better, for
            everyone.
          </p>

          <div className="boxes">
            {/* <div className="box">
              <h2>Over 1 Million</h2>
              <p>Retailers</p>
            </div>
            <div className="box">
              <h2>Over 1 Million</h2>
              <p>Retailers</p>
            </div>
            <div className="box">
              <h2>Over 1 Million</h2>
              <p>Retailers</p>
            </div>
            <div className="box">
              <h2>Over 1 Million</h2>
              <p>Retailers</p>
            </div> */}
            {list.map(l => l)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map
