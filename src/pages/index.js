import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Header from "../components/header"
import Hero from "../components/hero"
import SEO from "../components/seo"
import SecondContentType from "../components/secondContentType"

import { jsonToArray, unNestArray, unNestJson } from '../helpers/contentful'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const IndexPage = ({data}) => {
  const node = data.allContentfulFrontPage.edges[0].node
  const {navbar, hero, secondList: {itemsList}} = node
  
return (
  <Container>
    <SEO title="Home" />
    <Header navbar={navbar} />
    <Hero hero={hero} />
    {itemsList.map(item => <SecondContentType item={item} key={item}/>)}
  </Container>
)
}
  

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
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
            hero {
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
          grow {
            bgColor
            bgImage {
              file {
                url
              }
              title
            }
            text {
              text
            }
          }
          findOutMore {
            title
            subtitle
            button
          }
          footer {
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
          }
        }
      }
    }
  }
`