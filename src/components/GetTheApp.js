import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

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
  margin-bottom: 15px;
`

const P = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  margin-bottom: 25px;
`

const Country = styled.div`
  background: ${({ selected }) => (selected ? '#FFFF00' : '#f0ecfc')};
  width: 46%;
  height: 40px;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  margin: 0 10px 10px 0;
  cursor: pointer;
  @media (min-width: 600px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`

const CountriesList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const CountryInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const QRBox = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const CountryInfoBoxText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    width: 40%;
  }
`

const GetTheApp = ({ element }) => {
  const [selectedCountry, setSelectedCountry] = useState('')
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
    <>
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
    </>
  )
}

export default GetTheApp
