import React, { useState } from 'react'
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

const CountryTextTitle = styled.h5`
  font-size: 24px;
  line-height: 32px;
  font-family: Barlow Semi Condensed;
  letter-spacing: -0.05em;
  font-weight: 600;
  margin-top: 20px;
`

const P = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  margin-bottom: 16px;
`

const Country = styled.div`
  background: ${({ selected }) => (selected ? '#FFFF00' : '#f0ecfc')};
  width: 200px;
  height: 40px;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  margin: 0 10px 10px 0;
  cursor: pointer;
`

const CountriesList = styled.div`
  width: 650px;
  display: flex;
  flex-wrap: wrap;
`

const CountryInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 650px;
`

const QRBox = styled.div`
  display: flex;
  flex-direction: column;
`

const CountryInfoBoxText = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`

const GetTheApp = ({ element }) => {
  const [selectedCountry, setSelectedCountry] = useState('')
  console.log('selectedCountry: ', selectedCountry)
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

  const renderClickedInfo = () => {
    if (selectedCountry !== '') {
      if (selectedCountry === 'Other') {
        return <CountryTextTitle>{otherCountryText}</CountryTextTitle>
      }
      return (
        <CountryInfoBox>
          <QRBox>
            <CountryTextTitle>{qrTitle}</CountryTextTitle>
            <img src={qrImage.file.url} />
          </QRBox>
          <CountryInfoBoxText>
            <CountryTextTitle>{mobileCheckTitle}</CountryTextTitle>
            <P>{mobileCheckDescription}</P>
            <Button>{mobileCheckButton}</Button>
          </CountryInfoBoxText>
        </CountryInfoBox>
      )
    }
  }

  return (
    <Container>
      <Title>{title}</Title>
      <CountriesList>
        {countries.map((c, i) => (
          <Country
            selected={selectedCountry === c.countryName}
            onClick={() => setSelectedCountry(c.countryName)}
          >
            {c.countryName}
          </Country>
        ))}
      </CountriesList>
      {renderClickedInfo()}
    </Container>
  )
}

export default GetTheApp
