import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-family: Work Sans;
  font-style: normal;
  line-height: ${({ lineHeight }) => lineHeight || '1.5rem'};
  color: ${({ color }) => color || '#000000'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-size: ${({ size }) => size || '1rem'};
`

const BarlowText = ({
  children,
  color,
  size,
  fontWeight,
  lineHeight,
}) => (
  <Text
    color={color}
    size={size}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
  >
    {children}
  </Text>
)

export default BarlowText
