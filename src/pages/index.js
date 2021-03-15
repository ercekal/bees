import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const {node} = data.allContentfulHero.edges[0]
  const {heroButton,
    heroHeaderText: {
      raw
    }, 
    bgColor,
    heroDescription, 
    hero: {
      file: {
        url
      }
    }} = node
  console.log('data: ', data);
return (
  <Layout>
    <SEO title="Home" />
    {/* <h1>{data.allContentfulHero.nodes[0].heroButton}</h1> */}
    <p>Welcome to your new Gatsby site.</p>
    <p>{heroButton}</p>
    <p>{heroDescription}</p>
    <p>{raw}</p>
    <img src={url} alt='te' />
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
  </Layout>
)
}
  

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allContentfulHero {
      edges {
        node {
          heroButton
          bgColor
          heroHeaderText {
            raw
          }
          heroDescription
          hero {
            file {
              url
            }
          }
        }
      }
    }
  }
`