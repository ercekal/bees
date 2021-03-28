// import React from 'react'
// import Header from '../components/Header'
// import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
// import { StaticQuery, graphql } from 'gatsby'
// import { IntlProvider } from 'react-intl'
// import 'intl'

// const Layout = ({ children, location }) => {
//   return (
//     <StaticQuery
//       query={graphql`
//         query LayoutQuery {
//           site {
//             siteMetadata {
//               languages {
//                 defaultLangKey
//                 langs
//               }
//             }
//           }
//         }
//       `}
//       render={data => {
//         const url = location.pathname
//         const {
//           langs,
//           defaultLangKey,
//         } = data.site.siteMetadata.languages
//         const langKey = getCurrentLangKey(langs, defaultLangKey, url)
//         const homeLink = `/${langKey}/`.replace(
//           `/${defaultLangKey}/`,
//           '/',
//         )
//         const langsMenu = getLangs(
//           langs,
//           langKey,
//           getUrlForLang(homeLink, url),
//         ).map(item => ({
//           ...item,
//           link: item.link.replace(`/${defaultLangKey}/`, '/'),
//         }))
//         console.log('langsMenu: ', langsMenu)

//         return (
//           <div>
//             {/* <Header langs={langsMenu} /> */}
//             <div>{children}</div>
//           </div>
//         )
//       }}
//     />
//   )
// }

// export default Layout
