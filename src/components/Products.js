import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import BarlowText from './BarlowText'
import { gsap } from 'gsap'

const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  position: relative;
  min-height: 100vh;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`

const Left = styled.div`
  background: ${({ bgColor }) => bgColor || 'white'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5rem 0 0;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 50%;
  }
`

const ProductImage = styled.div`
  width: 100%;
  height: 50vh;
  max-height: 500px;
  background: url(${({ bgImage }) => 'https:' + bgImage}) no-repeat
    center bottom/contain;
  margin-top: auto;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 0;
  top: 50%;
  height: 120px;
  transform: translateY(-50%);
  position: absolute;

  @media screen and (min-width: 768px) {
    width: 50%;
    height: auto;
    min-height: 500px;
    position: static;
    transform: none;
  }
`
const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: ${props => (props.current ? 'block' : 'none')};
  }
`

const ProductTitle = styled.div`
  display: inline-block;
  overflow: hidden;
  padding: 15px 20px;
  position: relative;
`

const TitleHover = styled.div.attrs(props => ({
  style: {
    width: props.currentWidth,
  },
}))`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  text-indent: 20px;
  white-space: nowrap;
  overflow: hidden;
  font-size: inherit;
  font-family: inherit;
  background: black;

  @media screen and (max-width: 767px) {
    color: white;
  }

  @media screen and (min-width: 768px) {
    background: ${({ bgColor }) => bgColor || 'white'};
  }
`

const NavButton = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  position: absolute;
  left: ${({ left }) => left || 'auto'};
  right: ${({ right }) => right || 'auto'};
  border: 0;
  background: transparent;
  transform: rotate(${props => (props.left ? '90deg' : '270deg')});

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Chevron = styled.img`
  cursor: pointer;
  display: block;
`

const Products = ({ products }) => {
  const { description, productsList } = products
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [titleHoverWidth, setTitleHoverWidth] = useState('100%')
  const $image = useRef(null)
  const $left = useRef(null)
  const tl = gsap.timeline()

  const titleSelect = i => {
    if (i === currentProductIndex) return
    const tweenWidth = { value: '100%' }
    tl.to(tweenWidth, {
      value: '0%',
      duration: 0.1,
      onUpdate: function () {
        setTitleHoverWidth(this.targets()[0].value)
      },
    })
    tl.to($image.current, { autoAlpha: 0, duration: 0.2 }, '<')
    tl.call(setCurrentProductIndex, [i], '>')
    tl.to(
      tweenWidth,
      {
        value: '100%',
        duration: 0.5,
        ease: 'power2.out',
        onUpdate: function () {
          setTitleHoverWidth(this.targets()[0].value)
        },
      },
      '<',
    )
    tl.to($image.current, { autoAlpha: 1 }, '-=0.5')
    tl.to(
      $left.current,
      { background: productsList[i].bgColor, duration: 0.5 },
      '<',
    )
  }

  const changeCurrent = dir => {
    let nextSlide = 0
    if (dir < 0) {
      // get previous slide
      nextSlide =
        currentProductIndex === 0
          ? productsList.length - 1
          : currentProductIndex - 1
    } else if (typeof i === 'undefined') {
      // get next slide
      nextSlide =
        currentProductIndex === productsList.length - 1
          ? 0
          : currentProductIndex + 1
    }
    titleSelect(nextSlide)
  }

  const hoverTitle = i => {
    if (window.innerWidth >= 768) {
      titleSelect(i)
    }
  }

  return (
    <Container>
      <Left
        ref={$left}
        bgColor={productsList[currentProductIndex].bgColor}
      >
        <div>
          <BarlowText size="3rem" lineHeight="58px">
            {description.split('.')[0] + '.'}
          </BarlowText>
          <BarlowText size="3rem" lineHeight="58px">
            {description.split('.')[1]}
          </BarlowText>
        </div>
        <ProductImage
          ref={$image}
          bgImage={productsList[currentProductIndex].image.file.url}
        />
      </Left>
      <List>
        <NavButton left="0" onClick={() => changeCurrent(-1)}>
          <Chevron src="../../chevron.svg" />
        </NavButton>
        {productsList.map((product, i) => (
          <Product
            key={i}
            onMouseEnter={() => hoverTitle(i)}
            current={i === currentProductIndex}
          >
            <BarlowText size="3rem" lineHeight="58px">
              <ProductTitle data-title={product.title}>
                {product.title}
                {i === currentProductIndex && (
                  <TitleHover
                    aria-hidden
                    bgColor={product.bgColor}
                    currentWidth={titleHoverWidth}
                  >
                    {product.title}
                  </TitleHover>
                )}
              </ProductTitle>
            </BarlowText>
          </Product>
        ))}
        <NavButton right="0" onClick={() => changeCurrent(-1)}>
          <Chevron src="../../chevron.svg" />
        </NavButton>
      </List>
    </Container>
  )
}

export default Products
