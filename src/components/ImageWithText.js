import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto 2rem;
  @media (min-width: 768px) {
    width: 15rem;
    height: 280px;
    margin: 2rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor || ''};
  height: 70px;
  padding: 2rem 3rem 2rem 2rem;
  margin-bottom: 2rem;
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

const Image = styled.img`
  width: 100%;
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
      <Image src={url} />
      <TextContainer bgColor={textBgColor}>
        <Text>{text}</Text>
      </TextContainer>
    </Container>
  )
}

export default imageWithText
