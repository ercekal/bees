import React from 'react'
import styled from 'styled-components'
import './Perks.css'

const Header = styled.div`
  margin-right: 4.16%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const H2 = styled.h2`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -3px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
`

const H3 = styled.h3`
  font-size: 36px;
  line-height: 43.2px;
  letter-spacing: -3px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  letter-spacing: -0.05em;
`

const P = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: normal;
  margin-bottom: 0;
`

const Perks = ({ perks }) => {
  const { title, imageWithTitleAndSubtitles } = perks

  const list = imageWithTitleAndSubtitles.map((item, i) => (
    <div className="cols3" key={i}>
      <div className="img-card">
        <div className="img-card-img">
          <img src={item.image.file.url} />
        </div>
        <div className="img-card-text">
          <H3>{item.title}</H3>
          <P>{item.subtitle}</P>
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
  )
}

export default Perks
