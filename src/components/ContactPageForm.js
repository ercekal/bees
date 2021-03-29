import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from '@formspree/react'
import axios from 'axios'
import Button from './Button'
import './Form.css'

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

const CountrySelect = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const Select = styled.select`
  border: 0;
  border-bottom: 3px solid black;
  width: 80%;
  margin-left: 1rem;
`

const initialValues = {
  name: '',
  company: '',
  email: '',
  country: '',
  phone: '',
  message: '',
}

const ContactPageForm = ({ element }) => {
  const [values, setValues] = useState(initialValues)
  console.log('values: ', values)
  const [state, handleSubmit] = useForm('xnqlaovg')
  const [countriesList, setCountriesList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  console.log('countriesList: ', countriesList)

  useEffect(async () => {
    const result = await axios('https://restcountries.eu/rest/v2/')
    console.log('result: ', result.data)
    setCountriesList(Object.values(result.data))
  }, [])
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

  function renderListItems() {
    var items = []
    for (var i = 0; i < countriesList.length; i++) {
      var item = countriesList[i]
      items.push(
        <div onClick={() => setSelectedCountry(item)}>
          <span style={{ color: item.hex }}>{item.name}</span>
          <i className="fa fa-check"></i>
        </div>,
      )
    }
    return items
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>{formElementsList()[0]}</div>
        <div style={{ display: 'flex' }}>
          {formElementsList()[1]}
          {formElementsList()[2]}
        </div>
        <div>{formElementsList()[3]}</div>
        <CountrySelect>
          <div style={{ width: '20%' }}>
            <Label>Country *</Label>
          </div>
          <Select
            onChange={handleInputChange}
            name="country"
            value={values.country}
          >
            {countriesList.map((c, i) => (
              <option value={c.name} key={i}>
                {c.name}
              </option>
            ))}
          </Select>
        </CountrySelect>
        <div style={{ marginBottom: '20px' }}>
          {formElementsList()[4]}
        </div>
        <Button type="submit">{element.button}</Button>
      </form>
    </>
  )
}

export default ContactPageForm
