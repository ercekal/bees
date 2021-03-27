import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    height: auto;
  }
`
const Quote = styled.div`
  max-width: 800px;
  height: 200px;
  @media (min-width: 768px) {
    height: 300px;
    margin-bottom: 2rem;
  }
  @media (min-width: 1024px) {
    height: 400px;
  }

  .highlight {
    position: relative;
    display: inline-block;

    span {
      position: absolute;
      top: 0;
      left: -5px;
      padding-left: 0px;
      width: 100%;
      bottom: -5px;
      overflow: hidden;
      width: 0;
      color: white;
      white-space: nowrap;

      @media (min-width: 1024px) {
        bottom: -10px;
      }

      &:before {
        content: '';
        background: black;
        position: absolute;
        top: 5px;
        left: 2px;
        right: 0;
        bottom: 0px;
        z-index: -1;

        @media (min-width: 1024px) {
          top: 10px;
        }
      }
    }
  }
`

const Lower = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`

/*const MobileText = styled.div`
  display: initial;
  @media (min-width: 768px) {
    display: none;
  }
`

const TabletText = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`

const DesktopText = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: initial;
  }
`*/

const Testemonial = ({ testemonial }) => {
  const { clientName, clientDetail, text, highlightWords } = testemonial
  const $quote = useRef(null)

  let highlightedText = text
  if (highlightWords) {
    highlightWords.forEach(word => {
      highlightedText = highlightedText.replace(word, `<span class="highlight"><span aria-hidden>${word}</span>${word}</span>`)
    })
  }

  function createMarkup() {
    return {__html: 'First &middot; Second'};
  }

  // Animation
  useEffect(() => {
    const highlights = highlightWords ? gsap.utils.toArray($quote.current.querySelectorAll('.highlight span')) : false
    if (highlights) {
      const tl = gsap.timeline({paused: true})
        .to(highlights, {
          paddingLeft: 5,
          ease: 'none',
          duration: 0.01,
          stagger: 0.2
        })
        .to(highlights, {
          width: 'calc(100% + 10px)',
          ease: 'none',
          duration: 0.8,
          stagger: 0.2,
        }, '-=0.2')
      gsap.to(tl, {
        time: tl.duration(),
        duration: tl.duration(),
        ease: 'power3.inOut',
        delay: 0.3
      })
    }
  }, [])

  return (
    <Container>
      <Quote ref={$quote}>
        <BarlowText mobsize="2rem" tabletsize="3rem" size="5rem" lineHeight="1.2">
          <div dangerouslySetInnerHTML={{__html: highlightedText}} />
        </BarlowText>
      </Quote>
      <Lower>
        <WorkSans size="24px" mobsize="20px" lineHeight="1.2" fontWeight="600">
          {clientName}
        </WorkSans>
        <WorkSans size="20px" mobsize="18px" lineHeight="1.2" fontWeight="400">
          {clientDetail}
        </WorkSans>
      </Lower>
    </Container>
  )
}

export default Testemonial
