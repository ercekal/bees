import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  @media (min-width: 768px) {
    height: auto;
  }
`
const Quote = styled.div`
  max-width: 800px;
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

const Testemonial = ({ testemonial }) => {
  const { clientName, clientDetail, text } = testemonial

  return (
    <Container>
      <Quote>
        <BarlowText size="5rem" lineHeight="6rem">
          {text}
        </BarlowText>
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
