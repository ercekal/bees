import React from 'react'
import { globalHistory as history } from '@reach/router'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Button from './Button'
import Dropdown from './Dropdown'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import languages from '../data/languages'
import { IntlProvider } from 'react-intl'
import { addLocaleData } from 'react-intl'
import es from 'react-intl/locale-data/es'
import 'intl/locale-data/jsonp/es'

addLocaleData(es)

console.log('languages: ', languages)

const Container = styled.div`
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Image = styled.img`
  width: 130px;
  height: 30px;
`

const Header = ({ navbar }) => {
  const { location, navigate } = history
  console.log('location: ', location)
  const { langs, defaultLangKey } = languages
  const {
    bgColor,
    button,
    logo: {
      file: { url },
    },
  } = navbar
  const getLink = link => {
    let langKey
    for (let i = 0; i < langs.length; i++) {
      console.log('location.pathname: ', location.pathname)
      console.log('langs[i]: ', langs[i])
      if (location.pathname.includes(langs[i])) {
        langKey = langs[i]
      } else {
        langKey = 'en'
      }
    }
    // console.log('langKey: ', langKey)
    // if (defaultLangKey === langKey) {
    return location.pathname + '/' + link
    // } else {
    // return langKey + '/' + link
    // }
  }
  // const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  // console.log('langKey: ', langKey)
  // const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/')
  // console.log('homeLink: ', homeLink)
  // const langsMenu = getLangs(
  //   langs,
  //   langKey,
  //   getUrlForLang(homeLink, location.pathname.url),
  // ).map(item => ({
  //   ...item,
  //   link: item.link.replace(`/${defaultLangKey}/`, '/'),
  // }))
  // console.log('langsMenu: ', langsMenu)
  return (
    <IntlProvider locale={langKey}>
      <header
        style={{
          background: bgColor,
          height: '80px',
        }}
      >
        <Container>
          <Link to="/">
            <Image src={url} />
          </Link>
          <Dropdown />
          <Button to={'/contact'}>{button}</Button>
        </Container>
      </header>
    </IntlProvider>
  )
}

export default Header
