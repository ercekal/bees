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
  height: calc(100vh + 100px)
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
  width: 90%;
  opacity: 0;

  @media screen and (min-width: 768px) {
    top: 50%;
    width: 70%;
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

  @media screen and (min-width: 768px) and (max-height: 650px) {
    margin-bottom: 1rem;
    max-width: 350px;
    height: 130px;
  }
`

const SecondContentType = ({ items }) => {
  if (!items || items.length <= 0) return null

  const total = items.length
  const $container = useRef(null)
  const $pin = useRef(null)
  const $image = useRef(null)
  const $slides = useRef(null)
  const windowSize = useWindowSize()
  const initialGradient = `linear-gradient(
    to right,
    ${items[0].leftBgColor || 'yellow'} 0%,
    ${items[0].leftBgColor || 'yellow'} 0%,
    white 0%,
    white 100%
  )`

  // set up state
  const [gradient, setGradient] = useState(initialGradient)
  const [activeIndex, setActiveIndex] = useState(0)
  //const prevIndex = usePrevious(activeIndex)
  const [progress, setProgress] = useState(0)
  const [locked, setLocked] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [message, setMessage] = useState('initial')
  const [timeline, setTimeline] = useState(gsap.timeline({paused: true}))
  //const [currentImage, setCurrentImage] = useState(
  //  items[activeIndex].secondaryContentImage.file.url,
  //)


  // Methods
  const pinProgress = (scroll, current) => {
    lock()
  }

  const tweenGradient = (gradientVal, tweenWidth = true, tweenTiming = '>', index = activeIndex) => {
    const currentGradient = { value: gradientVal }
    const gradientDirection = windowSize.width <= 768 ? 'bottom' : 'right'
    const gradientPercent = windowSize.width <= 768 ? '50%' : '38.8%'

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

  const initialAnimation = () => {
    if (!timeline) return false
    timeline.call(animateIn, [])
    timeline.play()
  }

  const animateOut = (index) => {
    console.log('🔴 run animate out')
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
    timeline.call(console.log, ['🟢 animate out finished'], '>')
  }


  const changeSlide = (index) => {
    console.log('🔴 run change slide', index)
    if (!timeline) return false
    // Set new active index
    timeline.call(setActiveIndex, [index], '>')
    timeline.call(console.log, ['🟢 change slide finished:', activeIndex], '>')
  }

  const animateIn = (index) => {
    console.log('🔴 run animate in')
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
    timeline.call(console.log, ['🟢 animate in finished'], '>')
  }

  const containerScroll = (scroll) => {
    //console.log(scroll.deltaY, locked, animating)
    if (locked && !animating) {
      console.log('WHEEL', scroll.deltaY)
      setAnimating(a => true)
      // Calc next slide
      let nextSlide = scroll.deltaY > 0 ? activeIndex + 1 : activeIndex - 1
      console.log('✨ nextslide:', nextSlide)
      if (nextSlide < 0 || nextSlide > total - 1) {
        unlock()
        setAnimating(a => false)
        return false
      }

      // Do animations
      animateOut(nextSlide)
      changeSlide(nextSlide)
      animateIn(nextSlide)

      if (timeline) {
        timeline.call(() => {
           console.log('🙅‍♂️ finish animation')
          setAnimating(a => false)
        }, [], '>')
      } else {
        console.log('no timeline')
      }
    }
  }

  const lock = (direction) => {
    console.log('lock')
    setMessage('lock')
    setLocked(l => true)
    const $body = document.querySelector('body')
    $body.style.overflow = 'hidden'
    $body.style.height = '100%'

    // reposition if necessary
    //if ($container.currnt)
    const position = $container.current.getBoundingClientRect().top
    if (direction < 0 && position < 100 && position > -100) {
      console.log('⚾️ catch', position, direction)
      gsap.to(window, {scrollTo: $container.current})
    } else {
      console.log('⛳️ no catch', position, direction)
    }
  }

  const unlock = () => {
    console.log('🔓 unlock')
    if (initialAnimation) {
      setMessage('unlock')
      setLocked(l => false)
      const $body = document.querySelector('body')
      $body.style.removeProperty('overflow')
      $body.style.removeProperty('height')
    }
  }

  // Apply/kill scrolltriggers
  useEffect(() => {
    console.log('🎩 effect applied')
    const initST = ScrollTrigger.create({
      trigger: $container.current,
      start: 'top 95%',
      scrub: 0,
      onEnter: () => {
        initialAnimation()
      }
    })
    const scrollPinST = ScrollTrigger.create({
      trigger: $container.current,
      pin: $pin.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0,
      onEnterBack: self => {
        console.log('enter back')
        lock(self.direction)
      },
      onEnter: self => {
        console.log('enter', self)
        lock(self.direction)
      },
      onLeave: self => {
        console.log('leave', window.scrollY)
        unlock()
        console.log('leave2', window.scrollY)
        //gsap.set(window, {scrollTo: 1300})
        //setActiveIndex(i => total - 1)
        //setProgress(p => 1)
      },
    })
    return () => {
      console.log('effect removed')
      if (initST) initST.kill()
      if (scrollPinST) scrollPinST.kill()
    }
  }, [])


  return (
    <Container ref={$container} onWheel={(e) => containerScroll(e)}>
      <Pin ref={$pin} gradient={gradient}>
        { message }
        <SlideImage ref={$image} image={items[activeIndex].secondaryContentImage.file.url} />
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
                      <BarlowText size="36px" lineHeight="42px">
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
