import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'

const Container = styled.div`
  display: flex;
  background: ${({ bgColor, hoverColor, selected, hover }) =>
    hover ? (selected ? 'white' : hoverColor) : bgColor || 'white'};
`

const ContactPageButton = ({
  item,
  onEnter,
  onLeave,
  number,
  selected,
  hoverColor,
  hover,
}) => {
  const { color, icon, title, isButton } = item

  return (
    <Container
      bgColor={color}
      selected={selected}
      hoverColor={hoverColor}
      hover={hover}
      onMouseEnter={() => onEnter(number)}
      onMouseLeave={onLeave}
    >
      {isButton && <img src={`http:${icon.file.url}`} />}
      <BarlowText size="3rem" lineHeight="58px">
        {title}
      </BarlowText>
    </Container>
  )
}

export default ContactPageButton
