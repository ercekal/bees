import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
    <p>Now go build something great.</p>
    {itemsList.map(item => <SecondContentType item={item} />)}
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
                description
                file {
                  url
                }
                title
              }
              headerSubtitleSecond
              headerTitle
              leftBgColor
            }
          }
        }
      }
    }
  }
`