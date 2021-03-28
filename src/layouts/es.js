import React from 'react'
import Layout from './index'
import { addLocaleData } from 'react-intl'

import es from 'react-intl/locale-data/es'
import 'intl/locale-data/jsonp/es'

addLocaleData(es)

export default props => <Layout {...props} />
