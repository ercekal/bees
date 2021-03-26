import React from 'react'
import Button from './Button'

const ContactPageClickElement = ({ element }) => {
  const renderFormElements = element => {
    const list = element.inputsList.map((t, i) => {
      return (
        <div>
          <label>{t.label}</label>
          <input type="text" placeholder={t.placeholder} />
        </div>
      )
    })
    return list
  }
  if (!element) {
    return <div>Click element</div>
  } else if (element.type === 'form') {
    return <div>{renderFormElements(element).map(t => t)}</div>
  } else if (element.type === 'hiring') {
    return (
      <div>
        <div>{element.title}</div>
        {element.description.map((el, i) => (
          <p key={i}>{el}</p>
        ))}
        <Button>{element.button}</Button>
        <p>{element.link}</p>
      </div>
    )
  }
  return <div>Click element</div>
}

export default ContactPageClickElement
