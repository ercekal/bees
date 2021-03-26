import React, { useState, useEffect, useRef } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import { usePrevious } from '../hooks/usePrevious'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Container = styled.section`
  height: 400vh;
`
const Pin = styled.div.attrs(props => ({
  style: {
    background: props.gradient,
  },
}))`
  position: relative;
`
const Inner = styled.div`
  position: relative;
  max-width: 1280px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 1px;
  padding-bottom: 1px;
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

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  right: 0px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    width: 62.5%;
  }
`

const SlideContent = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 65%;
    height: auto;
  }

`

const SlideAnimate = styled.div.attrs(props => ({
  className: 'animate',
}))`
  opacity: 0;
`

const ProgressNav = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  display: flex;

  div:first-child {
    &:after {
      content: '/';
    }
  }

  @media screen and (min-width: 768px) {
    left: 30px;
    display: block;
    transform: none;
    bottom: initial;

    div:first-child {
      &:after {
        display: none;
      }
    }
  }
`

const NavMarker = styled.span`
  position: absolute;
  top: ${({ top }) => top || '0'};
  left: 0;
  height: 1px;
  display: block;
  width: 100%;
  background: rgba(255,255,255,0.3);

  &:last-child {
    display: none;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
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
  display: none;
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 5px;
    height: 200px;
  }
`

const SlideImage = styled.div`
  background: url(${({ image }) =>
    image ? `https:${image}` : ''}) center no-repeat;
  background-size: contain;
  height 40vh;
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 45%;
  width: 90%;
  opacity: 0;

  @media screen and (min-width: 768px) {
    top: 50%;
    width: 70%;
    height 70vh;
    left: 38.5%;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`

const SlideUpper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  height: 150px;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    width: 250px;
  }
`

const SlideLower = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin-top: 0;
  }
`

const Logo = styled.img.attrs(props => ({
  className: 'static',
}))`
  width: 114px;
  height: 35px;
  margin-bottom: 1rem;
`

const Title = styled.div.attrs(props => ({
  className: 'static',
}))`
  margin-bottom: 1rem;
`

const SlideBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 150px;
  align-items: baseline;
  margin-bottom: 3rem;
  padding: 0 15px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
    max-width: 250px;
    width: 100%;
  }
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
  const windowSize = useWindowSize()
  const prevIndex = usePrevious(activeIndex)
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
    setProgress(i => pinProgress)
  }

  // Animate slider background
  useEffect(() => {
    // Initial component in animation
    let slideAnimationTl
    if (slideAnimation) {
       slideAnimationTl = slideAnimation
    } else {
      slideAnimationTl = gsap.timeline({
        scrollTrigger: {
          trigger: $container.current,
          start: 'top 95%',
          scrub: false,
          once: true,
        },
      })
      setSlideAnimation(a => slideAnimationTl)
    }
    slideAnimationTl.clear()

    // Animate slide coloured background
    const currentGradient = { value: gradient }
    const duration = gradient === initialGradient ? 1.5 : 0.5
    const gradientDirection = windowSize.width <= 768 ? 'bottom' : 'right'
    const gradientPercent = windowSize.width <= 768 ? '50%' : '38.8%'

    if (prevIndex === activeIndex && prevIndex === 0) {
      slideAnimationTl.set($image.current, { autoAlpha: 0, y: -30 }, 0)
    }

    slideAnimationTl.to(currentGradient, {
      value: `linear-gradient(
        to ${gradientDirection},
        ${items[activeIndex].leftBgColor || 'yellow'} 0%,
        ${items[activeIndex].leftBgColor || 'yellow'} ${gradientPercent},
        white ${gradientPercent},
        white 100%
      )`,
      duration,
      ease: 'power4.inOut',
      onUpdate: () => {
        setGradient(g => currentGradient.value)
      },
    }, 0)

    if (prevIndex !== activeIndex || prevIndex === 0) {
      // Animate out current image
      if (prevIndex !== activeIndex) {
        slideAnimationTl.to($image.current, { autoAlpha: 0, y: -30, ease: 'power2.in', duration: 0.7 }, 0)
        // Animate in next image
        slideAnimationTl.call(
          setCurrentImage,
          [i => items[activeIndex].secondaryContentImage.file.url],
          0.7,
        )
      }
      slideAnimationTl.to(
        $image.current,
        {
          y: 0,
          autoAlpha: 1,
          ease: 'power4.out',
          duration: 1.5,
        },
        prevIndex === activeIndex ? 1 : 1,
      )

      // Animate out text content
      const $allAnimatable = $slides.current.querySelectorAll(
        '.animate',
      )
      const $allStatic = $slides.current.querySelectorAll(
        '.static',
      )
      slideAnimationTl.to(
        $allAnimatable,
        { autoAlpha: 0, duration: 0.4 },
        0.5,
      )
      // Animate in text content
      const slidesArray = $slides.current.children
      if (slidesArray) {
        ;[...slidesArray].forEach((slide, index) => {
          if (index === activeIndex) {
            const $staticEls = slide.querySelectorAll('.static')
            const $animatedEls = slide.querySelectorAll('.animate')
            slideAnimationTl.set($allStatic, { autoAlpha: 0 }, '>')
            slideAnimationTl.set($staticEls, { autoAlpha: 1 }, '>')
            slideAnimationTl.to(
              $animatedEls,
              {
                autoAlpha: 1,
                ease: 'power4.out',
                duration: 1,
                stagger: 0.1
              },
              '>',
            )
          }
        })
      }
    }
  }, [activeIndex, windowSize, slideAnimation])

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
        onLeave: self => {
          setActiveIndex(i => total - 1)
          setProgress(p => 1)
        },
        onUpdate: self => {
          pinProgress(self.progress)
        },
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
    <Container ref={$container}>
      <Pin ref={$pin} gradient={gradient}>
        <SlideImage ref={$image} image={currentImage} />
        <Inner>
          <ProgressNav>
            <WorkSans>{activeIndex + 1}</WorkSans>
            <Progress ratio={progress * 100}>
              {items.map((item, i) => (
                <NavMarker key={'marker'+i} top={((i + 1) / 4) * 100 + '%'} />
              ))}
            </Progress>
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
                  <SlideLower>
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
                  </SlideLower>
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
