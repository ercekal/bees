import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background: ${({ bgColor, hoverColor, selected, hover }) =>
    hover ? (selected ? 'white' : hoverColor) : bgColor || 'white'};
  margin-bottom: 1rem;
  width: 330px;
  cursor: pointer;
`

const Icon = styled.img`
  padding: 0.5rem;
  width: 50px;
`

const ContactPageButton = ({
  item,
  onEnter,
  onLeave,
  number,
  selected,
  hoverColor,
  hover,
  onClick,
}) => {
  const { color, icon, title, isButton } = item

  const onMouseEnter = number => {
    if (number !== 0) {
      onEnter(number)
    }
  }
  return (
    <Container
      bgColor={color}
      selected={selected}
      hoverColor={hoverColor}
      hover={hover}
      onMouseEnter={() => onMouseEnter(number)}
      onMouseLeave={onLeave}
      onClick={() => onClick(number)}
    >
      {isButton && <Icon src={`http:${icon.file.url}`} />}
      <BarlowText size="3rem" lineHeight="58px">
        {title}
      </BarlowText>
    </Container>
  )
}

export default ContactPageButton
