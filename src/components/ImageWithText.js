import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 280px;
  margin: 2rem;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor || ''};
  height: 70px;
  padding: 2rem 3rem 2rem 2rem;
`

const Text = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 0;
  color: #000000;
`

const imageWithText = ({ item }) => {
  const {
    text,
    textBgColor,
    image: {
      file: { url },
    },
  } = item
  return (
    <Container>
      <img src={url} />
      <TextContainer bgColor={textBgColor}>
        <Text>{text}</Text>
      </TextContainer>
    </Container>
  )
}

export default imageWithText
