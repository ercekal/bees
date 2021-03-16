import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  color: ${({ color }) => (color ? color : '#000000')};
  font-size: ${({ size }) => (size ? size : '1rem')};
`

const BarlowText = ({ children, color, size }) => {
  return (
    <Text color={color} size={size}>
      {children}
    </Text>
  )
}

export default BarlowText
