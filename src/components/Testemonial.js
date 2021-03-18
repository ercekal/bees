import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
`

const Lower = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  width: 100%;
  @media (min-width: 768px) {
    margin-top: 4rem;
  }
`

const Testemonial = ({ testemonial }) => {
  const { clientName, clientDetail, text } = testemonial
  console.log('testemonial, bgColor: ', testemonial)

  return (
    <Container>
      <BarlowText size="50px" lineHeight="60px">
        {text}
      </BarlowText>
      <Lower>
        <WorkSans size="20px" lineHeight="26px" fontWeight="600">
          {clientName}
        </WorkSans>
        <WorkSans size="18px" lineHeight="20px" fontWeight="400">
          {clientDetail}
        </WorkSans>
      </Lower>
    </Container>
  )
}

export default Testemonial
