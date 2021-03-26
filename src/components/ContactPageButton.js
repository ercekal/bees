import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || 'black'};
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
  hoverSelected,
  hoverColor,
  clickSelected,
  clickColor,
  hovered,
  onClick,
  clicked,
}) => {
  const { color, icon, title, isButton } = item

  const getBgColor = () => {
    if (clicked) {
      if (clickSelected) {
        return 'white'
      } else {
        return clickColor
      }
    } else if (hovered) {
      if (hoverSelected) {
        return 'white'
      } else {
        return hoverColor
      }
    } else {
      return color
    }
  }

  const onMouseEnter = number => {
    if (number !== 0) {
      onEnter(number)
    }
  }

  return (
    <Container
      bgColor={getBgColor()}
      selected={hoverSelected}
      hoverColor={hoverColor}
      hovered={hovered}
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
