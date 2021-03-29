import React from 'react'
import ContactPageForm from './ContactPageForm'
import Hiring from './Hiring'
import GetTheApp from './GetTheApp'

const ContactPageClickElement = ({ element }) => {
  switch (element.type) {
    case 'form':
      return <ContactPageForm element={element} />
    case 'hiring':
      return <Hiring element={element} />
    case 'gettheapp':
      return <GetTheApp element={element} />
    default:
      return <ContactPageForm element={element} />
  }
}

export default ContactPageClickElement
