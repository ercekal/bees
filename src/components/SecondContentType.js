import React, { useState, useEffect, useRef } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import { usePrevious } from '../hooks/usePrevious'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

const Container = styled.section`
  height: 600vh;
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
    flex-direction: column;
    align-items: center;
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
  width: 70%;
  opacity: 0;

  @media screen and (min-width: 768px) {
    top: 50%;
    height 70vh;
    left: calc(38.5% - 7vh);
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`

const SlideUpper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  height: 150px;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 3rem;
    align-items: flex-start;
    width: 250px;
  }

  @media screen and (min-width: 768px) and (max-height: 650px) {
    margin-bottom: 1rem;
  }
`

const SlideLower = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin-top: 0;
    margin-bottom: 0;
  }
`

const Logo = styled.img.attrs(props => ({
  className: 'static',
}))`
  width: 114px;
  height: 35px;
  margin-bottom: 1rem;
`

const UpperTitle = styled.div`
  text-align: center;
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    text-align: left;
    padding: 0;
  }
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

  @media screen and (min-width: 768px) and (max-height: 650px) {
    margin-bottom: 1rem;
    max-width: 350px;
    height: 130px;
  }
`

const SecondContentType = ({ items }) => {
  if (!items || items.length <= 0) return null

  const [activeIndex, setActiveIndex] = useState(0)
  const [timeline, setTimeline] = useState(gsap.timeline())
  const [progress, setProgress] = useState(0)
  const [pinScrollTrigger, setPinScrollTrigger] = useState(null)
  const [locked, setLocked] = useState(false)
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

  const pinProgress = (scroll, current) => {
    const step = 1 / total
    const velocity = scroll.getVelocity()
    let nextActiveIndex = velocity > 0 ? activeIndex + 1 : activeIndex - 1
    setProgress(i => scroll.progress)
    if (nextActiveIndex === items.length) return false

    // If progress is low perform initial tween
    /*if (scroll.progress < 0.1) {
      nextActiveIndex = 0
    }*/
    if (!locked && (velocity > 100 || velocity < -100) && nextActiveIndex >= 0) {

      if (nextActiveIndex === 1 && scroll.progress < step) {
        nextActiveIndex = 0
      }

      setActiveIndex(nextActiveIndex)
      lock()

      const totalScrollable = scroll.end - scroll.start
      let scrollTarget = totalScrollable * (step * (nextActiveIndex + 1)) + scroll.start

      gsap.to(window, {
        scrollTo: {y: scrollTarget},
        duration: 1
      }).then(() => {

        setTimeout(() => {
          unlock()
        }, 500)
      })
    }
  }

  const tweenGradient = (gradientVal, tweenWidth = true, tweenTiming = '>', index = activeIndex) => {
    const currentGradient = { value: gradientVal }
    const gradientDirection = window.innerWidth <= 768 ? 'bottom' : 'right'
    const gradientPercent = window.innerHeight <= 768 ? '50%' : '38.8%'

    timeline.to(currentGradient, {
      value: `linear-gradient(
        to ${gradientDirection},
        ${items[index].leftBgColor || 'yellow'} ${tweenWidth ? '0%' : gradientPercent},
        ${items[index].leftBgColor || 'yellow'} ${gradientPercent},
        white ${gradientPercent},
        white 100%
      )`,
      duration: 1.5,
      ease: 'power4.inOut',
      onUpdate: () => {
        setGradient(g => currentGradient.value)
      },
    }, tweenTiming)
  }

  const animateOut = (index) => {
    if (!timeline) return false

    // Image
    timeline.to($image.current, { autoAlpha: 0, y: -30, duration: 0.2 })

    // Text content
    const $allAnimatable = $slides.current.querySelectorAll('.animate')
    const $allStatic = $slides.current.querySelectorAll('.static')
    timeline.to(
      $allAnimatable,
      { autoAlpha: 0, duration: 0.4 },
      '<',
    )
  }


  const changeSlide = (index) => {
    if (!timeline) return false
    // Set new active index
    //timeline.call(setActiveIndex, [index], '>')
    timeline.call(setCurrentImage, [items[index].secondaryContentImage.file.url], '>')
  }

  const animateIn = (index) => {
    if (!timeline) return false

    // Background
    tweenGradient(gradient, false, '-=1', index)

    // Image
    timeline.to($image.current, { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.5')

    // Text content
    const $allStatic = $slides.current.querySelectorAll('.static')
    const slidesArray = $slides.current.children
      if (slidesArray) {
        ;[...slidesArray].forEach((slide, index) => {
          if (index === activeIndex) {
            const $staticEls = slide.querySelectorAll('.static')
            const $animatedEls = slide.querySelectorAll('.animate')
            timeline.set($allStatic, { autoAlpha: 0 }, '>')
            timeline.set($staticEls, { autoAlpha: 1 }, '>')
            timeline.to(
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

  const lock = (direction) => {
    setLocked(true)
    const $body = document.querySelector('body')
    $body.style.overflow = 'hidden'
    $body.style.height = '100%'
  }

  const unlock = () => {
    setLocked(false)
    const $body = document.querySelector('body')
    $body.style.removeProperty('overflow')
    $body.style.removeProperty('height')
  }


  useEffect(() => {
    if (!timeline) return () => {}
    if (prevIndex !== activeIndex && typeof prevIndex !== 'undefined') {
      timeline.clear()
      animateOut(activeIndex)
      changeSlide(activeIndex)
      animateIn(activeIndex)
    }
  }, [activeIndex, windowSize])


  // Apply/kill scrolltrigger
  useEffect(() => {
    const scrollPinST = ScrollTrigger.create({
      trigger: $container.current,
      anticipatePin: 1,
      pin: $pin.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 2,
      onLeave: self => {
        setActiveIndex(i => total - 1)
        setProgress(p => 1)
      },
      onUpdate: self => {
        pinProgress(self, activeIndex)
      },
    })

    return () => {
      if (scrollPinST) scrollPinST.kill()
    }
  }, [activeIndex, locked])

  useEffect(() => {
    const initST = ScrollTrigger.create({
      trigger: $container.current,
      start: 'top 95%',
      scrub: 0,
      once: true,
      onEnter: () => {
        animateIn(activeIndex)
      }
    })
    return () => {
      if (initST) initST.kill()
    }
  }, [])

  return (
    <Container ref={$container}>
      <Pin ref={$pin} gradient={gradient}>
        <SlideImage ref={$image} image={currentImage} />
        <Inner>
          <ProgressNav>
            <WorkSans>0{activeIndex + 1}</WorkSans>
            <Progress ratio={progress * 100}>
              {items.map((item, i) => (
                <NavMarker key={'marker'+i} top={((i + 1) / 4) * 100 + '%'} />
              ))}
            </Progress>
            <WorkSans>0{total}</WorkSans>
          </ProgressNav>
          <Slides gradient={gradient} ref={$slides}>
            {items.map((item, i) => (
              <Slide key={'slide-' + i}>
                <SlideContent>
                  <SlideUpper>
                    <Logo src={item.headerLogo.file.url} />
                    <SlideAnimate>
                      <UpperTitle>
                        <BarlowText size="36px" lineHeight="42px">
                          {item.headerTitle}
                        </BarlowText>
                      </UpperTitle>
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
                        <WorkSans size="16px" mobLineHeight="1.3">
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
                        <WorkSans size="16px" mobLineHeight="1.3">
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
