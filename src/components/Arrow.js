import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: ${({ bgColor }) => bgColor || 'black'};
  transform: rotate(${({ degrees }) => degrees + 'deg' || 'red'});
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  cursor: pointer;
`

const Arrow = ({ degrees, onClick, bgColor }) => {
  return (
    <Container degrees={degrees} onClick={onClick} bgColor={bgColor}>
      <img src="../../chevron-yellow.svg" />
    </Container>
  )
}

export default Arrow
