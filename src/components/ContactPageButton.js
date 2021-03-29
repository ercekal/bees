import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import './Contact.css'

const Container = styled.div`
  background-color: ${({ bgColor }) => bgColor || 'black'};
  background-image: url(${({ bgImage }) => bgImage || ''});
  background-repeat: no-repeat;
  background-size: 24px;
  padding: 8px 36px 12px 85px;
  background-position: 31px;
  margin-bottom: 12px;
  cursor: pointer;
  @media only screen and (max-width: 1260px) {
    padding: 4px 36px 8px 60px;
    background-size: 16px;
    background-position: 25px;
  }
`

const H2 = styled.h2`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -3px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: left;
  cursor: pointer;
`

const H3 = styled.h3`
  font-size: 36px;
  line-height: 56px;
  letter-spacing: -2px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  @media only screen and (max-width: 1260px) {
    font-size: 24px;
  }
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
  if (!isButton) {
    return (
      <div
        bgColor={getBgColor()}
        selected={hoverSelected}
        hoverColor={hoverColor}
        hovered={hovered}
        onMouseEnter={() => onMouseEnter(number)}
        onMouseLeave={onLeave}
        onClick={() => onClick(number)}
      >
        <H2>{title}</H2>
      </div>
    )
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
      bgImage={`http:${icon?.file?.url}`}
    >
      <H3>{title}</H3>
    </Container>
  )
}

export default ContactPageButton
