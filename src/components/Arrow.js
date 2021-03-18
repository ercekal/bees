import React from 'react'
import styled from 'styled-components'
import Chevron from '../../public/icons/chevron.svg'
import YellowChevron from '../../public/icons/chevron-yellow.svg'

const Container = styled.div`
  background: ${({ bgColor }) => bgColor || 'black'};
  transform: rotate(${({ degrees }) => degrees + 'deg' || 'red'});
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`

const Arrow = ({ degrees, color, onClick }) => {
  return (
    <Container degrees={degrees} onClick={onClick}>
      <img src={color === 'yellow' ? YellowChevron : Chevron} />
    </Container>
  )
}

export default Arrow
