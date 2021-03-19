import * as React from 'react'
import { graphql } from 'gatsby'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactPageButtonList from '../components/ContactPageButtonList'

const ContactPage = ({ data }) => {
  const { node } = data.allContentfulContactPage.edges[0]
  const { contactPageButtonList, navbar, footer } = node
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
