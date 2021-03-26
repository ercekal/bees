import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContactPageButton from './ContactPageButton'
import HoverElement from './HoverElement'
import ContactPageClickElement from './ContactPageClickElement'

const Wrapper = styled.div`
  position: relative;
  display: block;
  &::before {
    content: '';
    background: ${({ bgColor }) => bgColor || 'white'};
    position: absolute;
    height: 100%;
    width: 4000px;
    left: -2000px;
    z-index: -1;
    top: 0;
  }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 600px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const ContactPageButtonList = ({ list }) => {
  const [hoveredNumber, setHoveredNumber] = useState(0)
  const [clickedNumber, setClickedNumber] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [hoverIconsList, setHoverIconsList] = useState([])
  const [clickElementsList, setClickElementsList] = useState([])
  const [colorsList, setColorsList] = useState([])

  useEffect(() => {
    console.log('list: ', list)
    const hList = list.map((t, i) => (
      <HoverElement
        image={`http:${t.hoverElement.file.url}`}
        key={i}
      />
    ))
    const clickElList = list.map((t, i) => (
      <ContactPageClickElement element={t.clickEl} key={i} />
    ))
    const cList = list.map(c => c.color)
    setClickElementsList(clickElList)
    setColorsList(cList)
    setHoverIconsList(hList)
  }, [])

  const getBgColor = () => {
    if (isClicked()) {
      return `linear-gradient(
        to right,
        ${colorsList[clickedNumber]} 62%,
        ${colorsList[clickedNumber]} 00%,
        white 0%,
        white 0%
      );`
    } else if (hovered) {
      return colorsList[hoveredNumber]
    }
  }

  const getBgColorContainer = () => {
    if (isClicked()) {
      return `linear-gradient(
        to right,
        ${colorsList[clickedNumber]} 50%,
        ${colorsList[clickedNumber]} 00%,
        white 0%,
        white 00%
      );`
    } else if (hovered) {
      return colorsList[hoveredNumber]
    }
  }

  const isClicked = () => clickedNumber !== 0
  console.log('isClicked: ', isClicked())
  const onHover = n => {
    if (!isClicked()) {
      setHoveredNumber(n)
      setHovered(true)
    }
  }

  const onLeave = () => {
    if (!isClicked()) {
      setHoveredNumber(0)
      setHovered(false)
    }
  }

  return (
    <Wrapper
      className="container clearfix"
      clicked={isClicked()}
      bgColor={getBgColor()}
      // hoverBgColor={colorsList[hoveredNumber]}
      clickBgColor={colorsList[clickedNumber]}
    >
      <Container bgColor={getBgColorContainer()}>
        <List>
          {list.map((c, i) => (
            <ContactPageButton
              item={c}
              number={i}
              key={i}
              onEnter={onHover}
              onLeave={onLeave}
              hoverSelected={i === hoveredNumber}
              clickSelected={i === clickedNumber}
              hovered={hovered}
              hoverColor={colorsList[hoveredNumber]}
              clickColor={colorsList[clickedNumber]}
              clicked={isClicked()}
              onClick={setClickedNumber}
            />
          ))}
        </List>
        {!isClicked()
          ? hoverIconsList[hoveredNumber]
          : clickElementsList[clickedNumber]}
      </Container>
    </Wrapper>
  )
}

export default ContactPageButtonList
