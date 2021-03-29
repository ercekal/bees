import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { useForm } from '@formspree/react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Button from './Button'
import Chev from './Chevron'

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
  color: ${({ hasError }) => (hasError ? 'red' : 'black')};
`

const Textarea = styled.textarea`
  border: none;
  border-bottom: 3px solid black;
  &::placeholder {
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    padding-top: 32px;
  }
`

const Input = styled.input`
  border: none;
  border-bottom: 3px solid black;
  padding: 8px 4px;
  margin-bottom: 20px;
  &:focus {
    outline-width: 0;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 24px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    margin-bottom: 0;
  }
`

const CountrySelect = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
const SelectContainer = styled.div`
  width: 100%;
`

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  border-bottom: 3px solid black;
  margin-left: 1rem;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  position: relative;
  cursor: pointer;
`

const Option = styled.div`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  background-color: white;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`
const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  overflow-y: scroll;
  position: absolute;
  margin: 0.5rem 0 0 1rem;
  width: 100%;
`

const Chevron = styled(Chev)`
  transform: rotate(${({ isOpen }) => (isOpen ? '270deg' : '90deg')});
  transition: transform 0.6s ease;
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
  console.log('element: ', element)
  const { register, errors, handleSubmit } = useForm()
  const [values, setValues] = useState(initialValues)
  // const [state, handleSubmit] = useForm('xnqlaovg')
  const [countriesList, setCountriesList] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(async () => {
    const result = await axios('https://restcountries.eu/rest/v2/')
    setCountriesList(Object.values(result.data))
  }, [])

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  console.log('errors: ', errors)

  const formElementsList = () =>
    element.inputsList.map((t, i) => {
      return (
        <FormInput rowEl={i === 1}>
          <Label hasError={errors[t.name]}>
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
              ref={register({ required: t.required })}
            />
          ) : (
            <>
              <Input
                value={values[t.name]}
                type={t.type}
                name={t.name}
                onChange={handleInputChange}
                placeholder={t.placeholder}
                ref={register({ required: t.required })}
              />
            </>
          )}
        </FormInput>
      )
    })

  const onSubmit = data => console.log('data: ', data)

  const toggleOpen = () => setIsOpen(!isOpen)

  const handleCountrySelect = name => {
    setIsOpen(false)
    setValues({
      ...values,
      ['country']: name,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>{formElementsList()[0]}</div>
        <div style={{ display: 'flex' }}>
          {formElementsList()[1]}
          {formElementsList()[2]}
        </div>
        <div>{formElementsList()[3]}</div>
        <CountrySelect>
          <div style={{ width: '20%' }}>
            <Label hasError={errors['country']}>Country *</Label>
          </div>
          <SelectContainer>
            <Select onClick={toggleOpen}>
              {values.country === ''
                ? 'Select country'
                : values.country}
              <Chevron width={10} isOpen={isOpen} />
            </Select>
            {isOpen && (
              <OptionList>
                {countriesList.map((c, i) => (
                  <Option
                    value={c.name}
                    key={i}
                    onClick={() => handleCountrySelect(c.name)}
                  >
                    {c.name}
                  </Option>
                ))}
              </OptionList>
            )}
          </SelectContainer>
        </CountrySelect>
        <div style={{ marginBottom: '20px' }}>
          {formElementsList()[4]}
        </div>
        {/* Added country as a form input hidden element so that custom div can be validated */}
        {/* custom country selector changes the values.country so that validation will always work */}
        <div style={{ display: 'none' }}>{formElementsList()[5]}</div>
        <Button type="submit">{element.button}</Button>
      </form>
    </>
  )
}

export default ContactPageForm
