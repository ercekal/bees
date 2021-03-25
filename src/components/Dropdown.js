import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby' //import navigate from gatsby
import { globalHistory as history } from '@reach/router'
import { Link } from 'gatsby'

const Select = styled.select`
  border: none;
  background: #ffff00;
`

const Dropdown = () => {
  const { location, navigate } = history
  console.log('location: ', location)

  const [selectedLanguage, setSelectedLanguage] = useState(
    location.pathname === '/' ? 'en' : location.pathname.substring(1),
  )
  const [isOpen, setIsOpen] = useState(false)
  const languages = ['en', 'es']

  const onChange = val => {
    event.preventDefault()
    setSelectedLanguage(val)
    if (val === 'en' && location.pathname !== '/') {
      navigate('/')
    } else if (val === 'es' && location.pathname !== '/es') {
      navigate('es')
    }
  }
  const getLink = val => {
    if (location.pathname === '/es') {
      if (val === 'es') {
        return null
      } else {
        return '/'
      }
    } else if (location.pathname === '/') {
      return val
    }
  }
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {/* {selectedLanguage} */}
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
