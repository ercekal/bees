import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = ({ data }) => {
  const { node } = data.allContentfulContactPage.edges[0]
  const { contactPageButtonList } = node
  console.log('contactPageButtonList: ', contactPageButtonList)
  return (
    <Layout>
      <SEO title="Page two" />
      test
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery {
    allContentfulContactPage {
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
          contactPageButtonList {
            color
            hoverElement {
              file {
                url
              }
            }
            icon {
              file {
                url
              }
            }
            title
            isButton
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
