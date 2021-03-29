import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useForm } from '@formspree/react'

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

const Textarea = styled.textarea`
  border: none;
  border-bottom: 3px solid black;
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

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

const ContactPageForm = ({ element }) => {
  const [values, setValues] = useState(initialValues)
  const [state, handleSubmit] = useForm('xnqlaovg')

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const formElementsList = () =>
    element.inputsList.map((t, i) => {
      return (
        <FormInput rowEl={i === 1}>
          <Label>
            {t.label}
            {t.required && ' *'}
          </Label>
          {t.name === 'message' ? (
            <Textarea
              name={t.name}
              rows="4"
              cols="50"
              value={values[t.name]}
              type={t.type}
              onChange={handleInputChange}
              placeholder={t.placeholder}
            />
          ) : (
            <Input
              value={values[t.name]}
              type={t.type}
              name={t.name}
              onChange={handleInputChange}
              placeholder={t.placeholder}
            />
          )}
        </FormInput>
      )
    })
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>{formElementsList()[0]}</div>
        <div style={{ display: 'flex' }}>
          {formElementsList()[1]}
          {formElementsList()[2]}
        </div>
        <div>{formElementsList()[3]}</div>
        <div style={{ marginBottom: '20px' }}>
          {formElementsList()[4]}
        </div>
        <Button type="submit">{element.button}</Button>
      </form>
    </>
  )
}

export default ContactPageForm
