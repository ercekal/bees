import React from 'react'
import styled from 'styled-components'
import WorkSans from './WorkSans'
import BarlowText from './BarlowText'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.25rem;
  height: 7.5rem;
  margin: 1rem 1rem 0 0;
  background-color: #ffff00;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;
`

const TextContainer = styled.div`
  width: 80%;
  padding-bottom: 0.5rem;
`

const renderText = (item, i) => {
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

const MapBox = ({ items }) => {
  return (
    <Container>
      {items.map((item, i) => renderText(item, i))}
    </Container>
  )
}

export default MapBox
