import React from 'react'
import { graphql } from 'gatsby'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactPageButtonList from '../components/ContactPageButtonList'

const ContactPage = ({ data }) => {
  const { node } = data.allContentfulContactPage.edges[0]
  const { contactPageButtonList, navbar, footer } = node
  const renderNavbar = (desktopBgColor, smallDeviceBgColor) => {
    return (
      <Header
        navbar={navbar}
        desktopBgColor={desktopBgColor}
        smallDeviceBgColor={smallDeviceBgColor}
      />
    )
  }
  return (
    <div>
      <ContactPageButtonList
        list={contactPageButtonList}
        renderNavbar={renderNavbar}
      />
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
              ... on ContentfulGetTheApp {
                id
                mobileCheckButton
                mobileCheckDescription
                mobileCheckTitle
                otherCountryText
                qrTitle
                title
                countries {
                  countryName
                  path
                }
                qrImage {
                  file {
                    url
                  }
                }
                type
              }
              ... on ContentfulNewFormGroup {
                id
                inputsList {
                  required
                  label
                  placeholder
                  name
                  type
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
