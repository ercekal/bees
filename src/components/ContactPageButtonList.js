import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContactPageButton from './ContactPageButton'
import HoverElement from './HoverElement'
import ContactPageClickElement from './ContactPageClickElement'

const Wrapper = styled.div`
  background: ${({ clicked, hoverBgColor, clickBgColor }) =>
    clicked ? clickBgColor : hoverBgColor || 'white'};
  position: relative;
  display: block;
  &::before {
    content: '';
    background: ${({ clicked, hoverBgColor, clickBgColor }) =>
      clicked ? clickBgColor : hoverBgColor || 'white'};
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
  height: calc(100vh - 310px);
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const ContactPageButtonList = ({ list }) => {
  const [number, setNumber] = useState(0)
  const [clickedNumber, setClickedNumber] = useState(0)
  const [hover, setHover] = useState(false)
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

  const onHover = n => {
    setNumber(n)
    setHover(true)
  }

  const onLeave = () => {
    setNumber(0)
    setHover(false)
  }

  return (
    <Wrapper
      className="container clearfix"
      clicked={clickedNumber !== 0}
      hoverBgColor={colorsList[number]}
      clickBgColor={colorsList[clickedNumber]}
    >
      <Container>
        <List>
          {list.map((c, i) => (
            <ContactPageButton
              item={c}
              number={i}
              key={i}
              onEnter={onHover}
              onLeave={onLeave}
              selected={i === number}
              clickSelected={i === clickedNumber}
              hover={hover}
              hoverColor={colorsList[number]}
              clickColor={colorsList[clickedNumber]}
              clicked={clickedNumber !== 0}
              onClick={setClickedNumber}
            />
          ))}
        </List>
        {clickedNumber === 0
          ? hoverIconsList[number]
          : clickElementsList[clickedNumber]}
      </Container>
    </Wrapper>
  )
}

export default ContactPageButtonList
