import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  padding-left: 60px;
  width: 480px;
`

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ rowEl }) => (rowEl ? '40px' : '0')};
  width: 100%;
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
        <FormInput rowEl={i === 1}>
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
      <div style={{ display: 'flex' }}>
        {formElementsList()[1]}
        {formElementsList()[2]}
      </div>
      <div>{formElementsList()[3]}</div>
    </Container>
  )
}

export default ContactPageForm
