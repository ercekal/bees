import React from 'react'
import styled from 'styled-components'
import WorkSans from './WorkSans'

const Container = styled.div`
  width: 140px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  position: relative;
  z-index: 5;
  top: 150px;
  left: 280px;
  filter: drop-shadow(0px 0px 1px black);
  &:before {
    content: '';
    position: absolute;
    height: var(--h, 20px);
    width: var(--w, 30px);
    background: inherit;
    transform: scale(var(--x, 1), var(--y, -1));
    top: var(--p, 30px);
    right: var(--p, 50px);
    bottom: 100%;
    clip-path: polygon(0 100%, 100% 100%, 50% 0);
  }
`

const Tooltip = ({ children }) => {
  return (
    <Container>
      <WorkSans size="20px" lineHeight="30px" fontWeight="600">
        {children}
      </WorkSans>
    </Container>
  )
}

export default Tooltip
