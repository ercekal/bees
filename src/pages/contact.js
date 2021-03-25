import * as React from 'react'
import { graphql } from 'gatsby'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactPageButtonList from '../components/ContactPageButtonList'
import { globalHistory as history } from '@reach/router'

const ContactPage = ({ data }) => {
  const { location, navigate } = history
  console.log('location: ', location)

  const { node } = data.allContentfulContactPage.edges[0]
  const { contactPageButtonList, navbar, footer } = node
  console.log('contactPageButtonList: ', contactPageButtonList)
  return (
    <div>
      <Header navbar={navbar} />
      <ContactPageButtonList list={contactPageButtonList} />
      <Footer footer={footer} />
    </div>
  )
}

export default ContactPage

export const query = graphql`
  query ContactPageQuery {
    allContentfulContactPage(
      filter: { node_locale: { eq: "en-US" } }
    ) {
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
            clickEl {
              ... on ContentfulJoinTheTeam {
                id
                description
                link
                title
                button
                type
              }
              ... on ContentfulNewFormGroup {
                id
                inputsList {
                  required
                  label
                  placeholder
                }
                button
                type
              }
            }
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
