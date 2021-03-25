import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import './Perks.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Container = styled.section`
  position: relative;
`

const Carousel = styled.div`
  position: relative;
  margin-top: 80px auto 0;
  display: block;
  max-width: 1440px;
  padding: 120px 80px;

  @media only screen and (max-width: 900px) {
    padding: 0 0 80px 48px;
    overflow: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
  }

  @media only screen and (max-width: 1100px) {
    padding: 100px 48px;
  }
`

const Background = styled.div`
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  width: 0vw;
  z-index: -1;
  background: linear-gradient(
    white,
    white 48%,
    yellow 48%,
    yellow 64%,
    white 64%
  );

  @media only screen and (max-width: 900px) {
    background: linear-gradient(
      white,
      white 50%,
      yellow 50%,
      yellow 66%,
      white 66%
    );
  }

  @media only screen and (min-width: 1440px) {
    left: 50%;
    right: auto;
    width: 100vw;
    transform: translateX(-50%);
  }
 `

const Header = styled.div`
  margin-right: 4.16%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const H2 = styled.h2`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -3px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
`

const H3 = styled.h3`
  font-size: 36px;
  line-height: 43.2px;
  letter-spacing: -3px;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  letter-spacing: -0.05em;
`

const P = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: normal;
  margin-bottom: 0;
`

const Perks = ({ perks }) => {
  const { title, imageWithTitleAndSubtitles } = perks
  const $carouselInner = useRef(null)
  const $background = useRef(null)
  const $container = useRef(null)

  useEffect(() => {

    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: $container.current,
        start: 'top 50%',
        scrub: false,
        once: true,
      },
    })

    introTl.to($background.current, {
      width: '100vw',
      duration: 1,
      ease: 'power4.inOut'
    })

    introTl.fromTo(
      $carouselInner.current.children,
      {
        y: 30,
        autoAlpha: 0
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power4.inOut',
        stagger: 0.1
      },
      0.2
     )

    return () => {
      if (introTl.scrollTrigger) {
        introTl.scrollTrigger.kill()
        introTl.kill()
      }
    }

  }, [])

  const list = imageWithTitleAndSubtitles.map((item, i) => (
    <div className="cols3" key={i}>
      <div className="img-card">
        <div className="img-card-img">
          <img src={item.image.file.url} />
        </div>
        <div className="img-card-text">
          <H3>{item.title}</H3>
          <P>{item.subtitle}</P>
        </div>
      </div>
    </div>
  ))

  return (
    <Container ref={$container}>
      <div className="headline clearfix">
        <Header className="cols24">
          <H2>{title}</H2>
        </Header>
      </div>
      <Background ref={$background} />
      <Carousel className="carousel">
        <div className="cols24" ref={$carouselInner}>{list.map(l => l)}</div>
      </Carousel>
    </Container>
  )
}

export default Perks
