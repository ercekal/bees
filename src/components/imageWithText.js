import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 280px;
  margin: 2rem;
`

const imageWithText = ({item}) => {
    const { text, textBgColor, image: { file: { url } } } = item
    return (
      <Container>
        <img src={url} />
        <div style={{ background: textBgColor }}>{text}</div>
      </Container>
    )
};

export default imageWithText;