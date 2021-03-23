import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import IconWithText from './IconWithText'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${({ bgColor }) => bgColor || 'white'};
`

const Upper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 4rem auto 2rem;
  text-align: center;
  @media (min-width: 768px) {
    width: 30%;
    flex-direction: column;
  }
`
const Lower = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* width: 80%; */
  margin: 0 auto;
`

const Products = ({ products }) => {
  const { bgColor, description, imagesList } = products
  const renderIconWithText = () =>
    imagesList.map((item, i) => <IconWithText item={item} key={i} />)

  return (
    <Container bgColor={bgColor}>
      <Upper>
        <BarlowText size="3rem" lineHeight="58px">
          {description.split('.')[0] + '.'}
        </BarlowText>
        <BarlowText size="3rem" lineHeight="58px">
          {description.split('.')[1]}
        </BarlowText>
      </Upper>
      <Lower>{renderIconWithText()}</Lower>
    </Container>
  )
}

export default Products
