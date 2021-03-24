import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Controls, PlayState, Tween } from 'react-gsap'

gsap.registerPlugin(ScrollTrigger)

const Container = styled.section.attrs(props => ({
  style: {
    background: props.gradient,
  },
}))`
  height: 400vh;
`
const Pin = styled.div`
  position: relative;
`
const Inner = styled.div`
  position: relative;
  max-width: 1280px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Slides = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: background-color 1s linear;
  min-height: 500px;
  height: 100vh;
  width: 100%;

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

const SlideAnimate = styled.div.attrs(props => ({
  className: 'animate',
}))`
  opacity: 0;
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
        black ${props.ratio}%,
        rgba(0, 0, 0, 0.1) ${props.ratio}%,
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

const SlideImage = styled.div`
  background: url(${({ image }) =>
    image ? `http:${image}` : ''}) center no-repeat;
  background-size: contain;
  width: 100%;
  height 70vh;
  transform: translate(-50%, -50%);
  position: absolute;
  left: 38.5%;
  top: 50%;
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
  if (!items || items.length <= 0) return null

  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [pinScrollTrigger, setPinScrollTrigger] = useState(null)
  const [slideAnimation, setSlideAnimation] = useState(null)
  const [currentImage, setCurrentImage] = useState(
    items[activeIndex].secondaryContentImage.file.url,
  )
  const total = items.length
  const $container = useRef(null)
  const $pin = useRef(null)
  const $image = useRef(null)
  const $slides = useRef(null)
  let initialGradient = `linear-gradient(
    to right,
    ${items[activeIndex].leftBgColor || 'yellow'} 0%,
    ${items[activeIndex].leftBgColor || 'yellow'} 0%,
    white 0%,
    white 100%
  )`
  const [gradient, setGradient] = useState(initialGradient)

  const pinProgress = pinProgress => {
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
        start: 'top 95%',
        scrub: false,
        once: true,
      },
    })

    const currentGradient = { value: gradient }
    const duration = gradient === initialGradient ? 1.5 : 0.5
    slideAnimationTl.to(currentGradient, {
      value: `linear-gradient(
        to right,
        ${items[activeIndex].leftBgColor || 'yellow'} 0%,
        ${items[activeIndex].leftBgColor || 'yellow'} 38.8%,
        white 38.8%,
        white 100%
      )`,
      duration,
      ease: 'power4.inOut',
      onUpdate: () => {
        setGradient(g => currentGradient.value)
      },
    })

    const currentProgress = { value: progress }
    slideAnimationTl.to(
      currentProgress,
      {
        value: activeIndex + 1,
        duration: 1,
        ease: 'power4.inOut',
        onUpdate: () => {
          setProgress(g => currentProgress.value)
        },
      },
      '<',
    )

    // Animate in image
    slideAnimationTl.to($image.current, { autoAlpha: 0, y: 10 }, '<')
    slideAnimationTl.call(
      setCurrentImage,
      [i => items[activeIndex].secondaryContentImage.file.url],
      '>',
    )
    slideAnimationTl.to(
      $image.current,
      {
        y: 0,
        autoAlpha: 1,
        ease: 'power4.inOut',
        duration: 1,
      },
      '>',
    )

    // Animate in text content
    const slidesArray = $slides.current.children
    const $allAnimatable = $slides.current.querySelectorAll(
      '.animate',
    )
    slideAnimationTl.to(
      $allAnimatable,
      { autoAlpha: 0, y: 10 },
      '-=1',
    )
    const animateElements = []
    if (slidesArray) {
      ;[...slidesArray].forEach((slide, index) => {
        if (index === activeIndex) {
          gsap.killTweensOf($allAnimatable)
          slideAnimationTl.to(
            slide.querySelectorAll('.animate'),
            {
              autoAlpha: 1,
              y: 0,
              ease: 'power4.out',
              duration: 1,
            },
            '>',
          )
        }
      })
    }

    setSlideAnimation(a => slideAnimationTl)
  }, [activeIndex])

  useEffect(() => {
    return () => {
      if (slideAnimation && slideAnimation.scrollTrigger)
        slideAnimation.scrollTrigger.kill()
    }
  }, [slideAnimation])

  // Apply/kill scrolltrigger
  useEffect(() => {
    if (!pinScrollTrigger) {
      const scrollPin = ScrollTrigger.create({
        trigger: $container.current,
        pin: $pin.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: false,
        onUpdate: self => pinProgress(self.progress),
      })

      setPinScrollTrigger(p => scrollPin)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (pinScrollTrigger) pinScrollTrigger.kill()
    }
  }, [pinScrollTrigger])

  return (
    <Container gradient={gradient} ref={$container}>
      <Pin ref={$pin}>
        <SlideImage ref={$image} image={currentImage} />
        <Inner>
          <ProgressNav>
            <WorkSans>{activeIndex + 1}</WorkSans>
            <Progress ratio={(progress / total) * 100} />
            <WorkSans>{total}</WorkSans>
          </ProgressNav>
          <Slides gradient={gradient} ref={$slides}>
            {items.map((item, i) => (
              <Slide key={'slide-' + i}>
                <SlideContent>
                  <SlideUpper>
                    <Logo src={item.headerLogo.file.url} />
                    <SlideAnimate>
                      <BarlowText size="36px" lineHeight="43.2px">
                        {item.headerTitle}
                      </BarlowText>
                    </SlideAnimate>
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
                    <SlideAnimate>
                      <WorkSans size="16px">
                        {item.headerDescriptionFirst}
                      </WorkSans>
                    </SlideAnimate>
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
                    <SlideAnimate>
                      <WorkSans size="16px">
                        {item.headerDescriptionSecond}
                      </WorkSans>
                    </SlideAnimate>
                  </SlideBody>
                </SlideContent>
              </Slide>
            ))}
          </Slides>
        </Inner>
      </Pin>
    </Container>
  )
}

export default SecondContentType
