import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 75%;
  background: url(${({ bgImage }) => bgImage || ''}) center no-repeat;
  background-size: 270px;
  height: 100%;
  min-height: 380px;
`
const HoverElement = ({ image }) => {
  return <Container bgImage={image} />
}

export default HoverElement
