import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby' //import navigate from gatsby

const Select = styled.select`
  border: none;
  background: #ffff00;
`

const Dropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [isOpen, setIsOpen] = useState(false)
  const languages = ['en', 'es']

  //   return (
  // <div onClick={() => setIsOpen(!isOpen)}>
  // <div>
  {
    /* {isOpen && ( */
  }
  {
    /* <Select
        value={selectedLanguage}
        onChange={e => setSelectedLanguage(e.target.value)}
      >
        {languages.map(l => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </Select> */
  }
  {
    /* )} */
  }
  {
    /* </div> */
  }
  //   )
  const handleAddrTypeChange = e => navigate(e.target.value)

  return (
    <select onChange={e => navigate(e.target.value)}>
      {languages.map((lan, i) => (
        <option value={lan} key={i}>
          {lan}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
