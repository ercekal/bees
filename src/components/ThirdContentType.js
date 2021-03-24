import React from 'react'
import styled from 'styled-components'
import './Third.css'

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

const Image = styled.img`
  width: 100%;
`

const TextContainer = styled.div`
  background: ${({ bgColor }) => bgColor || ''};
`

const ThirdContentType = ({ third }) => {
  const { mainText, imageWithTextList } = third

  let list = imageWithTextList.map((item, i) => (
    <div className="photo-box" key={i}>
      <div className="photo-box-img">
        <Image src={'http:' + item.image.file.url} />
      </div>
      <div bgColor={item.textBgColor} className="photo-box-text">
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
