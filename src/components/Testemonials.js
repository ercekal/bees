import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Arrow from './Arrow'
import Testemonial from './Testemonial'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  background: linear-gradient(
    to right,
    ${({ leftBgColor }) => leftBgColor || 'red'} 0%,
    ${({ leftBgColor }) => leftBgColor || 'red'} 45%,
    white 45%,
    white 100%
  );
  height: 500px;
  @media (min-width: 768px) {
    background: url(${({ image }) => (image ? `http:${image}` : '')})
        left no-repeat,
      linear-gradient(
        to right,
        ${({ leftBgColor }) => leftBgColor || 'red'} 0%,
        ${({ leftBgColor }) => leftBgColor || 'red'} 38%,
        white 38%,
        white 100%
      );
    padding: 6rem;
    width: 100%;
    height: 100%;
  }
`

const Arrows = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 768px) {
    max-width: 800px;
  }
`

const Testemonials = ({ testemonials }) => {
  const [number, setNumber] = useState(0)
  const [list, setList] = useState([])
  const { testemonialsList, bgColor } = testemonials

  useEffect(() => {
    const tList = testemonialsList.map((t, i) => (
      <Testemonial testemonial={t} key={i} />
    ))
    setList(tList)
  }, [])

  function previous() {
    if (number === 0) {
      setNumber(list.length - 1)
    } else {
      setNumber(number - 1)
    }
  }

  function next() {
    if (number === list.length - 1) {
      setNumber(0)
    } else {
      setNumber(number + 1)
    }
  }

  return (
    <Container leftBgColor={bgColor}>
      {list[number]}
      <Arrows>
        <Arrow degrees="0" onClick={previous} />
        <Arrow degrees="180" onClick={next} />
      </Arrows>
    </Container>
  )
}

export default Testemonials
