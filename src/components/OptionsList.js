import React from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'

const Option = styled.div`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  background-color: white;
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

const OptionsList = ({ items, onClick, handleClose }) => {
  OptionsList.handleClickOutside = () => handleClose(false)

  return (
    <List>
      {items.map((c, i) => (
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
  handleClickOutside: () => OptionsList.handleClickOutside,
}

export default onClickOutside(OptionsList, clickOutsideConfig)
