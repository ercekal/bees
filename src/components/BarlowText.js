import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-family: Barlow Semi Condensed;
  font-style: normal;
  font-weight: 600;
  font-size: 5rem;
  line-height: ${({ lineHeight }) => lineHeight || '1rem'};
  letter-spacing: -0.05em;
  color: ${({ color }) => color || '#000000'};
  font-size: ${({ size }) => size || '1rem'};
`

const BarlowText = ({ children, color, size, lineHeight }) => (
  <Text color={color} size={size} lineHeight={lineHeight}>
    {children}
  </Text>
)

export default BarlowText
