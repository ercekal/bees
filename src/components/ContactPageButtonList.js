import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContactPageButton from './ContactPageButton'
import HoverElement from './HoverElement'
import ContactPageClickElement from './ContactPageClickElement'
import './Contact.css'

const Section = styled.section`
  height: 100vh;
`

const Left = styled.div`
  width: 100%;
  width: 40%;
  height: 100vh;
  float: left;
  background-color: #ffb042;
  position: relative;
  background: ${({ bgColor }) => bgColor || 'white'};
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`

const Right = styled.div`
  width: 60%;
  height: 100vh;
  float: left;
  position: relative;
  background: ${({ bgColor }) => bgColor || 'white'};
  @media only screen and (max-width: 960px) {
    width: 100%;
    padding: 80px 0;
    height: auto;
  }
`

const Menu = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 64%;
  @media only screen and (max-width: 960px) {
    width: 80%;
  }
`

const Element = styled.div`
  width: 76%;
  max-width: 800px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 960px) {
    width: 80%;
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    margin: auto;
  }
`

const ContactPageButtonList = ({ list }) => {
  const [hoveredNumber, setHoveredNumber] = useState(0)
  const [clickedNumber, setClickedNumber] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [hoverIconsList, setHoverIconsList] = useState([])
  const [clickElementsList, setClickElementsList] = useState([])
  const [colorsList, setColorsList] = useState([])

  const isClicked = () => clickedNumber !== 0

  useEffect(() => {
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

  useEffect(() => {
    if (clickedNumber !== 0) {
      setHovered(false)
    }
  }, [clickedNumber])

  const getBgColor = () => {
    if (isClicked()) {
      return colorsList[clickedNumber]
    } else if (hovered) {
      return colorsList[hoveredNumber]
    }
  }

  const getBgColorRight = () => {
    if (hovered) {
      return colorsList[hoveredNumber]
    } else if (isClicked()) {
      return 'white'
    }
  }

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
    <Section className="clearfix">
      <Left bgColor={getBgColor()}>
        <Menu>
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
        </Menu>
      </Left>
      <Right bgColor={getBgColorRight()}>
        <Element>
          {!isClicked()
            ? hoverIconsList[hoveredNumber]
            : clickElementsList[clickedNumber]}
        </Element>
      </Right>
    </Section>
  )
}

export default ContactPageButtonList
