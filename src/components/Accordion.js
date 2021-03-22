import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Chevron from './Chevron'
import WorkSans from './WorkSans'
import BarlowText from './BarlowText'

import './Accordion.css'

const Country = styled.div`
  padding-bottom: 0.5rem;
`

function Accordion({ countries, title }) {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(setActive === 'active' ? '0px' : `170px`)
    setRotateState(
      setActive === 'active'
        ? 'accordion__icon'
        : 'accordion__icon rotate',
    )
  }

  return (
    <div className="accordion__section">
      <button
        className={`accordion ${setActive}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">
          <BarlowText size="28px" lineHeight="33.6px">
            {title}
          </BarlowText>
        </p>
        <Chevron
          className={`${setRotate}`}
          width={10}
          fill={'#777'}
        />
      </button>
      <div
        ref={content}
        style={{ height: `${setHeight}` }}
        className="accordion__content"
      >
        {countries.map((c, i) => (
          <Country key={i}>
            <WorkSans size="18px" lineHeight="22px">
              {c.countryName}
            </WorkSans>
          </Country>
        ))}
      </div>
    </div>
  )
}

export default Accordion
