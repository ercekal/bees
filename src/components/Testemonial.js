import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 400px; */
  @media (min-width: 1024px) {
    height: auto;
  }
`
const Quote = styled.div`
  max-width: 800px;
  height: 200px;
  @media (min-width: 768px) {
    height: 300px;
  }
  @media (min-width: 1024px) {
    height: 400px;
  }
`

const Lower = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  width: 100%;
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`

const MobileText = styled.div`
  display: initial;
  @media (min-width: 768px) {
    display: none;
  }
`

const TabletText = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`

const DesktopText = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: initial;
  }
`

const Testemonial = ({ testemonial }) => {
  const { clientName, clientDetail, text } = testemonial

  return (
    <Container>
      <Quote>
        <MobileText>
          <BarlowText size="2rem" lineHeight="3rem">
            {text}
          </BarlowText>
        </MobileText>
        <TabletText>
          <BarlowText size="3rem" lineHeight="4rem">
            {text}
          </BarlowText>
        </TabletText>
        <DesktopText>
          <BarlowText size="5rem" lineHeight="6rem">
            {text}
          </BarlowText>
        </DesktopText>
      </Quote>
      <Lower>
        <WorkSans size="24px" lineHeight="32px" fontWeight="600">
          {clientName}
        </WorkSans>
        <WorkSans size="20px" lineHeight="30px" fontWeight="400">
          {clientDetail}
        </WorkSans>
      </Lower>
    </Container>
  )
}

export default Testemonial
