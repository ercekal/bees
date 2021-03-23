import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SEO from '../components/seo'
import Perks from '../components/Perks'
import Products from '../components/Products'
import Testemonials from '../components/Testemonials'
import Grow from '../components/Grow'
import Map from '../components/Map'
import FindOutMore from '../components/FindOutMore'
import Footer from '../components/Footer'
import SecondContentType from '../components/SecondContentType'
import ThirdContentType from '../components/ThirdContentType'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const IndexPage = ({ data }) => {
  const { node } = data.allContentfulFrontPage.edges[0]
  const {
    navbar,
    hero,
    secondList: { itemsList },
    third,
    products,
    testemonials,
    perks,
    grow,
    map,
    findOutMore,
    footer,
  } = node

  return (
    <Container>
      <SEO title="Home" />
      <Header navbar={navbar} />
      <Hero hero={hero} />
      {itemsList.map((item, i) => (
        <SecondContentType
          item={item}
          key={i}
          number={i}
          total={itemsList.length}
        />
      ))}
      <ThirdContentType third={third} />
      <Products products={products} />
      <Testemonials testemonials={testemonials} />
      <Perks perks={perks} />
      <Map mapBoxes={map} countries={footer.countries} />
      {/* <Grow grow={grow} /> */}
      <FindOutMore findOutMore={findOutMore} />
      <Footer footer={footer} />
    </Container>
  )
}

export default IndexPage

export const query = graphql`
  query FrontPageQuery {
    allContentfulFrontPage {
      edges {
        node {
          navbar {
            bgColor
            button
            logo {
              file {
                url
              }
            }
          }
          hero {
            bgColor
            heroButton
            heroDescription
            heroText
            heroColoredText
            heroImageDesktop {
              file {
                url
              }
            }
            heroImageMobile {
              file {
                url
              }
            }
          }
          secondList {
            itemsList {
              headerDescriptionSecond
              headerLogo {
                file {
                  url
                }
              }
              secondaryContentImage {
                file {
                  url
                }
              }
              headerSubtitleFirst
              headerDescriptionFirst
              headerSubtitleSecond
              headerTitle
              leftBgColor
            }
          }
          third {
            imageWithTextList {
              text
              textBgColor
              image {
                file {
                  url
                }
              }
            }
            mainText
          }
          products {
            bgColor
            description
            imagesList {
              text
              image {
                file {
                  url
                }
              }
            }
          }
          testemonials {
            testemonialsList {
              clientName
              clientDetail
              text
            }
            bgColor
          }
          perks {
            imageWithTitleAndSubtitles {
              image {
                file {
                  url
                }
              }
              subtitle
              title
            }
            title
          }
          grow {
            bgColor
            bgImage {
              file {
                url
              }
            }
            text {
              text
            }
          }
          map {
            mapBoxes {
              boxElement {
                bold
                text
              }
            }
          }
          findOutMore {
            title
            subtitle
            button
            bgColor
            bgImage {
              file {
                url
              }
            }
          }
          footer {
            logo {
              file {
                url
              }
            }
            getInTouchTitle
            getInTouchElements {
              icon {
                file {
                  url
                }
                title
              }
            }
            countriesTitle
            countries {
              countryName
              path
            }
            tradeMark
            bottomLinks {
              title
              path
            }
          }
        }
      }
    }
  }
`
