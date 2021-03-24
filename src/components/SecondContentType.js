import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Controls, PlayState, Tween } from 'react-gsap'

gsap.registerPlugin(ScrollTrigger)

const Container = styled.section.attrs(props => ({
    style: {
      background: props.gradient,
    },
  }))`
  height: 400vh;
`
const Inner = styled.div`
  position: relative;
  max-width: 1280px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;
`

const Slides = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: background-color 1s linear;
  min-height: 500px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Logo = styled.img`
  width: 114px;
  height: 35px;
  margin-bottom: 1rem;
`

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  right: 0px;
  width: 62.5%;
  height: 100%;
`

const SlideContent = styled.div`
  position: relative;
  width: 65%;
  padding: 30px 0;
`

const ProgressNav = styled.div`
  position: absolute;
  left: 30px;
`

const Progress = styled.div.attrs(props => ({
    style: {
      background: `linear-gradient(
        to bottom,
        black 0%,
        black ${ props.ratio }%,
        rgba(0, 0, 0, 0.1) ${ props.ratio }%,
        rgba(0, 0, 0, 0.1) 100%
      )`,
    },
  }))`
  display: flex;
  width: 5px;
  height: 200px;
`

const Lower = styled.div`
  display: flex;
  width: 100%;
`

const LowerContent = styled.div`
  width: 100%;
  padding-right: 2rem;
`

const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`

const Desktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
`

const DesktopLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 38%;
  padding-left: 4rem;
  /* position: absolute;
  left: 100px;
  top: calc(100vh / 4); */
`

const DesktopRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 62%;
  margin-right: 2rem;
  @media (min-width: 768px) {
    margin-right: 0;
    align-items: center;
  }
`

const SlideUpper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  height: 150px;
  width: 250px;
`

const SlideBody = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  height: 150px;
  align-items: baseline;
  margin-bottom: 3rem;
  &:last-child {
    margin-bottom: 0;
  }
`

const MobileTitle = styled.div`
  margin-bottom: 0.5rem;
`

const Title = styled.div`
  margin-bottom: 1rem;
`

const Slash = styled.p`
  padding: 0 0.25rem 0 0.5rem;
`


const SecondContentType = ({ items }) => {
  /*const {
    headerLogo,
    secondaryContentImage,
    headerSubtitleFirst,
    headerDescriptionFirst,
    headerSubtitleSecond,
    headerDescriptionSecond,
    headerTitle,
    leftBgColor,
    active
  } = item*/
  if (!items || items.length <= 0) return null

  /*{itemsList.map((item, i) => (

  ))}*/

  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [pinScrollTrigger, setPinScrollTrigger] = useState(null)
  const [slideAnimation, setSlideAnimation] = useState(null)
  const total = items.length
  const $container = useRef(null)
  const $slides = useRef(null)
  let initialGradient = `linear-gradient(
    to right,
    ${ items[activeIndex].leftBgColor || 'yellow' } 0%,
    ${ items[activeIndex].leftBgColor || 'yellow' } 0%,
    white 0%,
    white 100%
  )`
  const [gradient, setGradient] = useState(initialGradient)


  const pinProgress = (pinProgress) => {
    const step = 1 / total
    const nextActiveIndex = Math.floor(pinProgress / step)
    if (nextActiveIndex === items.length) return false
    setActiveIndex(i => nextActiveIndex)
  }


  // Animate slider background
  useEffect(() => {
    // Initial component in animation
    const slideAnimationTl = gsap.timeline({
      scrollTrigger: {
        trigger: $container.current,
        start: "top 95%",
        scrub: false,
        once: true
      },
    })

    const currentGradient = { value: gradient }
    const duration = (gradient === initialGradient) ? 1.5 : 0.5
    slideAnimationTl.to(currentGradient, {
      value: `linear-gradient(
        to right,
        ${ items[activeIndex].leftBgColor || 'yellow' } 0%,
        ${ items[activeIndex].leftBgColor || 'yellow' } 37.5%,
        white 37.5%,
        white 100%
      )`,
      duration,
      ease: 'power4.inOut',
      onUpdate: () => {
        setGradient(g => currentGradient.value)
      }
    })

    const currentProgress = { value: progress }
    slideAnimationTl.to(currentProgress, {
      value: activeIndex + 1,
      duration: 1,
      ease: 'power4.inOut',
      onUpdate: () => {
        setProgress(g => currentProgress.value)
      }

    }, '<')

    setSlideAnimation(a => slideAnimationTl)
  }, [activeIndex])

  useEffect(() => {
    return () => {
      if (slideAnimation && slideAnimation.scrollTrigger) slideAnimation.scrollTrigger.kill()
    }
  }, [slideAnimation])


  // Apply/kill scrolltrigger
  useEffect(() => {
    if (!pinScrollTrigger) {
      const scrollPin = ScrollTrigger.create({
        anticipatePin: 1,
        trigger: $container.current,
        pin: $slides.current,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom",
        scrub: false,
        onUpdate: self => pinProgress(self.progress)
      })

      setPinScrollTrigger(pst => scrollPin)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (pinScrollTrigger) pinScrollTrigger.kill()
    }
  }, [pinScrollTrigger])


  return (
     <Container gradient={gradient} ref={$container}>
      <Inner>
        <Slides ref={$slides}>
          <ProgressNav>
            <WorkSans>{activeIndex + 1}</WorkSans>
            <Progress ratio={((progress) / total) * 100} />
            <WorkSans>{total}</WorkSans>
          </ProgressNav>

          <button onClick={() => setProgress(progress + 1)}>Clicky</button>

          {items.map((item, i) => (
            <Slide>
              <SlideContent>
                <SlideUpper>
                  <Logo src={item.headerLogo.file.url} />
                  <Tween from={{ opacity: 0 }} duration={2}>
                    <BarlowText size="36px" lineHeight="43.2px">
                      {item.headerTitle}
                    </BarlowText>
                  </Tween>
                </SlideUpper>
                <SlideBody>
                  <Title>
                    <WorkSans
                      size="24px"
                      lineHeight="2rem"
                      fontWeight="600"
                    >
                      {item.headerSubtitleFirst}
                    </WorkSans>
                  </Title>
                  <WorkSans size="16px">{item.headerDescriptionFirst}</WorkSans>
                </SlideBody>
                <SlideBody>
                  <Title>
                    <WorkSans
                      size="24px"
                      lineHeight="2rem"
                      fontWeight="600"
                    >
                      {item.headerSubtitleSecond}
                    </WorkSans>
                  </Title>
                  <WorkSans size="16px">{item.headerDescriptionSecond}</WorkSans>
                </SlideBody>
              </SlideContent>
            </Slide>
          ))}
        </Slides>
      </Inner>

      {/*<DesktopRight>
        <DesktopUpper>
          <Logo src={headerLogo.file.url} />
          <BarlowText size="36px" lineHeight="43.2px">
            {headerTitle}
          </BarlowText>
        </DesktopUpper>
        <DesktopList>
          <Title>
            <WorkSans
              size="24px"
              lineHeight="2rem"
              fontWeight="600"
            >
              {headerSubtitleFirst}
            </WorkSans>
          </Title>
          <WorkSans size="16px">{headerDescriptionFirst}</WorkSans>
        </DesktopList>
        <DesktopList>
          <Title>
            <WorkSans
              size="24px"
              lineHeight="2rem"
              fontWeight="600"
            >
              {headerSubtitleSecond}
            </WorkSans>
          </Title>
          <WorkSans size="16px">{headerDescriptionSecond}</WorkSans>
        </DesktopList>
      </DesktopRight>*/}
    </Container>
  )
}

export default SecondContentType
