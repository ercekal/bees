import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const Select = styled.select`
  border: none;
  background: #ffff00;
`

const Dropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [isOpen, setIsOpen] = useState(false)
  const languages = ['en', 'es']

  return (
    // <div onClick={() => setIsOpen(!isOpen)}>
    <div>
      {/* {isOpen && ( */}
      <Select isOpen open show>
        {languages.map(l => (
          <option selected={l === selectedLanguage} value={l}>
            {l}
          </option>
        ))}
      </Select>
      {/* )} */}
    </div>
  )
}

export default Dropdown
