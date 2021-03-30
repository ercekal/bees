import React from 'react'
import styled from 'styled-components'
import './FindOutMore.css'

const Button = styled.button`
  font-size: 20px;
  background-color: #000;
  color: #ffff00;
  letter-spacing: -1px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  padding: 8px 16px;
  border: none;
  margin-top: 24px;
`

const H2 = styled.h2`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -3px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: left;
  cursor: pointer;
`

const P = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
`

const Section = styled.section`
  @media (min-width: 768px) {
    padding-top: '50px';
  }
`

const FindOutMore = ({ findOutMore }) => {
  const {
    title,
    subtitle,
    button,
    bgColor,
    bgImage,
    bgImageShadow,
  } = findOutMore
  return (
    <Section style={{ backgroundColor: bgColor }}>
      <div className="container clearfix">
        <div className="cols12">
          <div className="text-area">
            <H2>{title}</H2>
            <P>{subtitle}</P>
            <Button>{button}</Button>
          </div>
        </div>

        <div className="cols12">
          <div className="buzz">
            <img
              className="buzz-body"
              src={'http:' + bgImage.file.url}
            />
            <img
              className="buzz-shadow"
              src={'http:' + bgImageShadow.file.url}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FindOutMore
