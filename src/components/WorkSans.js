import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-family: Work Sans;
  font-style: normal;
  line-height: ${({ lineHeight }) => lineHeight || '1.5rem'};
  color: ${({ color }) => color || '#000000'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-size: ${({ size }) => size || '1rem'};

  ${({ tabletsize }) => tabletsize && `
    @media screen and (max-width: 1024px) {
      font-size: ${tabletsize};
    }
  `}

  ${({ mobsize }) => mobsize && `
    @media screen and (max-width: 768px) {
      font-size: ${mobsize};
    }
  `}

  ${({ mobLineHeight }) => mobLineHeight && `
    @media screen and (max-width: 768px) {
      line-height: ${mobLineHeight};
    }
  `}
`

const WorkSans = ({
  children,
  color,
  mobsize,
  tabletsize,
  size,
  fontWeight,
  lineHeight,
  mobLineHeight,
}) => (
  <Text
    color={color}
    size={size}
    mobsize={mobsize}
    tabletsize={tabletsize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    mobLineHeight={mobLineHeight}
  >
    {children}
  </Text>
)

export default WorkSans
