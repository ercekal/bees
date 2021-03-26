import React from 'react'
import ContactPageForm from './ContactPageForm'
import Hiring from './Hiring'
import GetTheApp from './GetTheApp'

const ContactPageClickElement = ({ element }) => {
  if (!element) {
    return <div>Click element</div>
  } else if (element.type === 'form') {
    return <ContactPageForm element={element} />
  } else if (element.type === 'hiring') {
    return <Hiring element={element} />
  } else if (element.type === 'gettheapp') {
    return <GetTheApp element={element} />
  }
  return <div>Click element</div>
}

export default ContactPageClickElement
