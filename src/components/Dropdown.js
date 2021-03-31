import React from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'

const Option = styled.div`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  z-index: 101;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: yellow;
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
