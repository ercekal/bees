import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Arrow from './Arrow'
import Testemonial from './Testemonial'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  background: linear-gradient(
    to right,
    ${({ leftBgColor }) => leftBgColor || 'red'} 0%,
    ${({ leftBgColor }) => leftBgColor || 'red'} 45%,
    white 45%,
    white 100%
  );
  height: 500px;
  @media (min-width: 768px) {
    background: url(${({ image }) => (image ? `http:${image}` : '')})
        left no-repeat,
      linear-gradient(
        to right,
        ${({ leftBgColor }) => leftBgColor || 'red'} 0%,
        ${({ leftBgColor }) => leftBgColor || 'red'} 38%,
        white 38%,
        white 100%
      );
    padding: 200px 0 120px;
    width: 100%;
    height: auto;
  }
`

const Arrows = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 768px) {
    max-width: 800px;
  }
`

const Testemonials = ({ testemonials }) => {
  const [number, setNumber] = useState(0)
  const [list, setList] = useState([])
  const { testemonialsList, bgColor } = testemonials
  const $wrapper = useRef(null)

  useEffect(() => {
    const tList = testemonialsList.map((t, i) => (
      <Testemonial testemonial={t} key={i} />
    ))
    setList(tList)

    const introAnim = gsap.fromTo(
      $wrapper.current,
      {
        y: 30,
        autoAlpha: 0
      },
      {
        scrollTrigger: {
          trigger: $wrapper.current,
          start: 'top 50%',
          scrub: false,
          once: true,
        },
        y: 0,
        autoAlpha: 1
      }
     )

    return () => {
      introAnim.kill()
    }

  }, [])

  function changeSlide(dir) {
    // animate out
    const tl = gsap.timeline({ paused: true })
    tl.fromTo($wrapper.current, { y: 0, autoAlpha: 1 }, { y: 30, autoAlpha: 0, ease: 'none' })
    tl.call(() => {
      // Change slide number
      let newNumber = number + dir
      if (dir < 0 && number === 0) {
        newNumber = list.length - 1
      } else if (dir > 0 && number === list.length - 1) {
        newNumber = 0
      }
      setNumber(newNumber)
    }, [])
    tl.to($wrapper.current, { y: 0, autoAlpha: 1, ease: 'none' })

    gsap.to(tl, {
      time: tl.duration(),
      duration: tl.duration(),
      ease:"power2.inOut"
    })
  }

  return (
    <Container leftBgColor={bgColor}>
      <div ref={$wrapper}>
        {list[number]}
      </div>
      <Arrows>
        <Arrow degrees="0" onClick={() => changeSlide(-1)} />
        <Arrow degrees="180" onClick={() => changeSlide(1)} />
      </Arrows>
    </Container>
  )
}

export default Testemonials
