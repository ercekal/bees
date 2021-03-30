// import React, { useState, useRef } from 'react'
// import styled from 'styled-components'
// import { globalHistory as history } from '@reach/router'
// import { Link } from 'gatsby'

// const Select = styled.select`
//   border: none;
//   background: #ffff00;
// `

// const Dropdown = () => {
//   const { location, navigate } = history

//   const [selectedLanguage, setSelectedLanguage] = useState(
//     location.pathname === '/' ? 'en' : location.pathname.substring(1),
//   )
//   const [isOpen, setIsOpen] = useState(false)
//   const languages = ['en', 'es']

//   const getLink = val => {
//     if (location.pathname === '/es') {
//       if (val === 'es') {
//         return null
//       } else {
//         return '/'
//       }
//     } else if (location.pathname === '/') {
//       if (val === 'en') return '/'
//       return val
//     }
//   }
//   return (
//     <div onClick={() => setIsOpen(!isOpen)}>
//       <div>
//         <div>
//           {languages.map((lan, i) => (
//             <Link to={getLink(lan)} key={i}>
//               {lan.charAt(0).toUpperCase() + lan.slice(1)}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dropdown

import React from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'

const Option = styled.div`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  /* background-color: white; */
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`
const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  overflow-y: scroll;
  position: absolute;
  margin: 0.5rem 0 0 1rem;
`

const Dropdown = ({ onClick, handleClose }) => {
  const langs = [
    {
      name: 'En',
    },
    {
      name: 'Es',
    },
    {
      name: 'Pt',
    },
  ]
  Dropdown.handleClickOutside = () => handleClose(false)

  return (
    <List>
      {langs.map((c, i) => (
        <Option
          value={c.name}
          key={i}
          onClick={() => onClick(c.name)}
        >
          {c.name}
        </Option>
      ))}
    </List>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
}

export default onClickOutside(Dropdown, clickOutsideConfig)
