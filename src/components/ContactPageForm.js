import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  padding-left: 60px;
`

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  margin-bottom: 0;
`

const Input = styled.input`
  border: none;
  border-bottom: 3px solid black;
  padding: 8px 4px;
  margin-bottom: 20px;
  &::placeholder {
    font-size: 16px;
    line-height: 24px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    margin-bottom: 0;
  }
`

const ContactPageForm = ({ element }) => {
  const formElementsList = () =>
    element.inputsList.map((t, i) => {
      return (
        <FormInput>
          <Label>
            {t.label}
            {t.required && ' *'}
          </Label>
          <Input type="text" placeholder={t.placeholder} />
        </FormInput>
      )
    })
  return (
    <Container>
      <div>{formElementsList()[0]}</div>
      <div>
        {formElementsList()[1]}
        {formElementsList()[2]}
      </div>
      <div>{formElementsList()[3]}</div>
    </Container>
  )
}

export default ContactPageForm
