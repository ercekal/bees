import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useForm, ValidationError } from '@formspree/react'

const Container = styled.div`
  padding-left: 160px;
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
  padding-top: ${({ isMessageBox }) =>
    isMessageBox ? '50px' : '8px'};

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

  console.log('values: ', values)

  const handleInputChange = e => {
    console.log('e: ', e)
    const { name, value } = e.target
    console.log('name, value: ', name, value)
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
          <Input
            value={values[t.name]}
            type={t.type}
            name={t.name}
            onChange={handleInputChange}
            placeholder={t.placeholder}
            isMessageBox={i === 4}
          />
        </FormInput>
      )
    })
  return (
    <Container>
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
        {/* <button type="submit" to="#" onSubmit>
          {element.button}
        </button> */}
        <Button type="submit">{element.button}</Button>
      </form>
    </Container>
  )
}

export default ContactPageForm
