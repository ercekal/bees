import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContactPageButton from '../components/ContactPageButton'
import HoverElement from '../components/HoverElement'

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
  const [hover, setHover] = useState(false)
  const [hoverIconsList, setHoverIconsList] = useState([])
  const [colorsList, setColorsList] = useState([])

  useEffect(() => {
    const hList = list.map((t, i) => (
      <HoverElement
        image={`http:${t.hoverElement.file.url}`}
        key={i}
      />
    ))
    const cList = list.map(c => c.color)
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
    <div
      className="container clearfix"
      style={{
        backgroundColor: colorsList[number],
        display: 'block',
      }}
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
              hover={hover}
              hoverColor={colorsList[number]}
            />
          ))}
        </List>
        {hoverIconsList[number]}
      </Container>
    </div>
  )
}

export default ContactPageButtonList
