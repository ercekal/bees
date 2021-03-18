import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 280px;
  margin: 2rem;
`

const ImageWithTextAndSubtitle = ({ item }) => {
  const {
    title,
    subtitle,
    image: {
      file: { url },
    },
  } = item
  return (
    <Container>
      <img src={url} />
      <BarlowText
        size="2.25rem"
        lineHeight="43px"
        style={{ padding: '1rem 0' }}
      >
        {title}
      </BarlowText>
      <WorkSans>{subtitle}</WorkSans>
    </Container>
  )
}

export default ImageWithTextAndSubtitle
