import React from 'react'
import styled from 'styled-components'
import WorkSans from './WorkSans'
import BarlowText from './BarlowText'
import MapBox from './MapBox'
import Accordion from './Accordion'
import WorldMap from './WorldMap'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    position: relative;
    justify-content: flex-start;
    padding: 0 4rem;
    height: 100vh;
  }
  @media (min-width: 1024px) {
    height: 90vh;
  }
`

const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  @media (min-width: 768px) {
    display: none;
    flex-direction: column;
  }
`

const Desktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    width: 40%;
    text-align: start;
  }
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Title = styled.div`
  width: 60%;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: initial;
  }
`

const TabletTitle = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    text-align: center;
    width: 80%;
    padding-bottom: 2rem;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`

const SubTitle = styled.div`
  width: 60%;
  @media (min-width: 768px) {
    width: 60%;
  }
`

const BoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  @media (min-width: 768px) {
    position: absolute;
    left: 4rem;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const Map = ({ mapBoxes, countries }) => {
  return (
    <Container>
      <LeftContainer>
        <Title>
          <BarlowText size="4rem" lineHeight="76.8px">
            And we’re just getting started
          </BarlowText>
        </Title>
        <TabletTitle>
          <BarlowText size="2rem" lineHeight="36px">
            And we’re just getting started
          </BarlowText>
        </TabletTitle>
        <SubTitle>
          <WorkSans>
            Every day brings new challenges. Which is why, every day,
            we’re developing new ways to make BEES, better, for
            everyone.
          </WorkSans>
        </SubTitle>
        <Desktop>
          <BoxesContainer>
            {mapBoxes.mapBoxes.map((item, i) => (
              <MapBox items={item.boxElement} key={i} />
            ))}
          </BoxesContainer>
        </Desktop>
        <Mobile>
          <BoxesContainer>
            {mapBoxes.mapBoxes.map((item, i) => (
              <MapBox items={item.boxElement} key={i} />
            ))}
          </BoxesContainer>
          <Accordion
            title="And this is where you will find us"
            countries={countries}
          />
        </Mobile>
      </LeftContainer>
      <WorldMap />
    </Container>
  )
}

export default Map
