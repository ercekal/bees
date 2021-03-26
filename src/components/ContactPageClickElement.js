import React from 'react'
import Button from './Button'
import ContactPageForm from './ContactPageForm'

const ContactPageClickElement = ({ element }) => {
  if (!element) {
    return <div>Click element</div>
  } else if (element.type === 'form') {
    return <ContactPageForm element={element} />
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
