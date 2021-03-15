import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import Header from "../components/header"
import Hero from "../components/hero"
import SEO from "../components/seo"
import { jsonToArray, unNestArray, unNestJson } from '../helpers/contentful'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const IndexPage = ({data}) => {
  const node = data.allContentfulFrontPage.edges[0].node
  const {navbar, hero, secondList} = node
  
return (
  <Container>
    <SEO title="Home" />
    <Header navbar={navbar} />
    <Hero hero={hero} />
    {/* <h1>{data.allContentfulHero.nodes[0].heroButton}</h1> */}
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/contact/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
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