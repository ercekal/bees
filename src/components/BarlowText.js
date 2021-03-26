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

  @media screen and (max-width: 1024px) {
    font-size: ${({ tabletsize }) => tabletsize || '1rem'};
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ mobsize }) => mobsize || '1rem'};
  }
`

const BarlowText = ({ children, color, size, mobsize, tabletsize, lineHeight }) => (
  <Text color={color} size={size} mobsize={mobsize} tabletsize={tabletsize} lineHeight={lineHeight}>
    {children}
  </Text>
)

export default BarlowText
