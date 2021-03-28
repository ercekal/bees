import React, { useState } from 'react'
import styled from 'styled-components'
import { globalHistory as history } from '@reach/router'
import { Link } from 'gatsby'

const Select = styled.select`
  border: none;
  background: #ffff00;
`

const Dropdown = () => {
  const { location, navigate } = history

  const [selectedLanguage, setSelectedLanguage] = useState(
    location.pathname === '/' ? 'en' : location.pathname.substring(1),
  )
  const [isOpen, setIsOpen] = useState(false)
  const languages = ['en', 'es']

  const getLink = val => {
    if (location.pathname === '/es/') {
      if (val === 'es') {
        return null
      } else {
        return '/'
      }
    } else if (location.pathname === '/') {
      if (val === 'en') return '/'
      return val + '/'
    }
  }
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <div>
        <div>
          {languages.map((lan, i) => (
            <Link to={getLink(lan)} key={i}>
              {lan.charAt(0).toUpperCase() + lan.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
