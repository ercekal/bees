import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  padding-left: 160px;
  width: 480px;
`

const Title = styled.h3`
  font-size: 48px;
  line-height: 57px;
  font-family: Barlow Semi Condensed;
  letter-spacing: -0.05em;
  font-weight: 600;
  margin-bottom: 20px;
`

const P = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  margin-bottom: 16px;
`

const Country = styled.div`
  background: #f0ecfc;
  width: 200px;
  height: 40px;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  margin: 0 10px 10px 0;
`

const CountriesList = styled.div`
  width: 650px;
  display: flex;
  flex-wrap: wrap;
`

const GetTheApp = ({ element }) => {
  const {
    mobileCheckButton,
    mobileCheckDescription,
    mobileCheckTitle,
    otherCountryText,
    qrTitle,
    title,
    countries,
    qrImage,
  } = element
  const cList = countries.map((c, i) => (
    <Country>{c.countryName}</Country>
  ))
  return (
    <Container>
      <Title>{title}</Title>
      <CountriesList>
        {countries.map((c, i) => (
          <Country>{c.countryName}</Country>
        ))}
      </CountriesList>
    </Container>
  )
}

export default GetTheApp
