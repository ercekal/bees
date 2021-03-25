import React from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import WorkSans from './WorkSans'
import Button from './Button'

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const MobileText = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    display: none;
  }
`
const MobileImage = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

const DesktopText = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 150px;
    justify-content: space-around;
  }
`

const DesktopSubtitle = styled.div`
  padding: 1rem 0;
`

const Image = styled.img`
  height: 200px;
  @media (min-width: 768px) {
    height: 300px;
    margin-right: 10rem;
  }
`

const MobileElement = styled.div`
  margin: 1rem 0;
`

const ImageContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: initial;
    position: absolute;
    right: 0;
    width: '30%';
  }
`

const Section = styled.section`
  @media (min-width: 768px) {
    padding-top: '50px';
  }
`

const FindOutMore = ({ findOutMore }) => {
  const { title, subtitle, button, bgColor, bgImage } = findOutMore
  return (
    <Section style={{ backgroundColor: bgColor }}>
      <ImageContainer
        className="findOutMore-image"
        style={{ position: 'absolute', right: 0, width: '30%' }}
      >
        <Image src={`http:${bgImage.file.url}`} />
      </ImageContainer>

      <div className="container clearfix">
        <Left>
          <MobileImage>
            <Image src={`http:${bgImage.file.url}`} />
          </MobileImage>
          <MobileText>
            <BarlowText size="2.6rem" lineHeight="50px">
              {title}
            </BarlowText>
            <MobileElement>
              <WorkSans lineHeight="20px">{subtitle}</WorkSans>
            </MobileElement>
            <MobileElement>
              <Button width="130px">{button}</Button>
            </MobileElement>
          </MobileText>
          <DesktopText>
            <BarlowText size="4rem" lineHeight="77px">
              {title}
            </BarlowText>
            <DesktopSubtitle>
              <WorkSans lineHeight="30px">{subtitle}</WorkSans>
            </DesktopSubtitle>
            <Button width="130px">{button}</Button>
          </DesktopText>
        </Left>
      </div>
    </Section>
  )
}

export default FindOutMore
