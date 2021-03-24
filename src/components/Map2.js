import React from 'react'
import styled from 'styled-components'
import './Map.css'
import WorldMap from './WorldMap'

const H2 = styled.h2`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -3px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
`

const Map = () => {
  return (
    <section id="four-boxes" style={{ height: '900px' }}>
      <div class="interactive-maps">
        <WorldMap />
      </div>

      <div class="container clearfix">
        <div class="cols8" style={{ marginRight: '4.16%' }}>
          <H2>And we’re just getting started</H2>
          <p>
            Every day brings new challenges. Which is why, every day,
            we’re developing new ways to make BEES, better, for
            everyone.
          </p>

          <div class="boxes">
            <div class="box">
              <h2>Over 1 Million</h2>
              <p>Retailers</p>
            </div>
            <div class="box">
              <h2>Over 1 Million</h2>
              <p>Retailers</p>
            </div>
            <div class="box">
              <h2>Over 1 Million</h2>
              <p>Retailers</p>
            </div>
            <div class="box">
              <h2>Over 1 Million</h2>
              <p>Retailers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map
