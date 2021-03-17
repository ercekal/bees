import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  color: ${({ color }) => color || '#000000'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-size: ${({ size }) => size || '1rem'};
`

const BarlowText = ({ children, color, size, fontWeight }) => (
  <Text color={color} size={size} fontWeight={fontWeight}>
    {children}
  </Text>
)

export default BarlowText
