import React from 'react'
import styled from 'styled-components'
import WorkSans from './WorkSans'
import BarlowText from './BarlowText'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffff00;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  @media (min-width: 768px) {
    margin: 1rem 1rem 0 0;
    width: 13.25rem;
    padding-top: 1rem;
    height: 7.5rem;
  }
`

const Mobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

const Desktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
`

const TextContainer = styled.div`
  @media (min-width: 768px) {
    padding-bottom: 0.5rem;
  }
`

const renderTextDesktop = (item, i) => {
  const { text, bold } = item

  if (item.bold) {
    return (
      <TextContainer>
        <BarlowText key={i} size="36px" lineHeight="43.2px">
          {item.text}
        </BarlowText>
      </TextContainer>
    )
  }
  return (
    <TextContainer>
      <WorkSans key={i} lineHeight="16px" size="14px">
        {item.text}
      </WorkSans>
    </TextContainer>
  )
}

const renderTextMobile = (item, i) => {
  const { text, bold } = item

  if (item.bold) {
    return (
      <TextContainer>
        <BarlowText key={i} size="28px" lineHeight="33.6px">
          {item.text}
        </BarlowText>
      </TextContainer>
    )
  }
  return (
    <TextContainer>
      <WorkSans key={i} lineHeight="16px" size="14px">
        {item.text}
      </WorkSans>
    </TextContainer>
  )
}

const MapBox = ({ items }) => {
  return (
    <Container>
      <Desktop>
        {items.map((item, i) => renderTextDesktop(item, i))}
      </Desktop>
      <Mobile>
        {items.map((item, i) => renderTextMobile(item, i))}
      </Mobile>
    </Container>
  )
}

export default MapBox
