import React from 'react'

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
    return <div>{element.title}</div>
  }
  return <div>Click element</div>
}

export default ContactPageClickElement
