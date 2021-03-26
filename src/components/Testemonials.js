import React, { useState, useEffect, useRef } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import styled from 'styled-components'
import Arrow from './Arrow'
import Testemonial from './Testemonial'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Container = styled.section.attrs(props => ({
  style: {
    background: props.gradient,
  },
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 2rem;
  height: auto;

  @media (min-width: 768px) {
    padding: 200px 0 120px;
    width: 100%;
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
  const $container = useRef(null)
  const $wrapper = useRef(null)
  const windowSize = useWindowSize()
  const gradientPercent = windowSize.width <= 768 ? '45%' : '38%'
  const initialGradient = `linear-gradient(
    to right,
    ${bgColor || 'yellow'} 0%,
    ${bgColor || 'yellow'} 0%,
    white 0%,
    white 100%
  )`
  const [gradient, setGradient] = useState(initialGradient)

  useEffect(() => {
    const tList = testemonialsList.map((t, i) => (
      <Testemonial testemonial={t} key={i} />
    ))
    setList(tList)

    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: $container.current,
        start: 'top 70%',
        scrub: false,
        once: true,
      },
    })

    const currentGradient = { value: gradient }

    introTl.to(currentGradient, {
      value: `linear-gradient(
        to right,
        ${bgColor || 'yellow'} 0%,
        ${bgColor || 'yellow'} ${gradientPercent},
        white ${gradientPercent},
        white 100%
      )`,
      duration: 1,
      ease: 'power4.inOut',
      onUpdate: () => {
        setGradient(g => currentGradient.value)
      }
    })

    introTl.fromTo(
      $wrapper.current,
      {
        y: 30,
        autoAlpha: 0
      },
      {
        y: 0,
        autoAlpha: 1
      },
      0.5
     )

    return () => {
      if (introTl.scrollTrigger) {
        introTl.scrollTrigger.kill()
        introTl.kill()
      }
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
    <Container gradient={gradient} ref={$container}>
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
