import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'redux-bundler-react'
import getStore from './bundles'
import cache from './utils/cache'

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

import App from './app'

/**
 * index
 *
 * Application Start
 *
 * Uses the money clip cache to get the
 * most recent cached data
 *
 * Then connects Redux and Material UI Theme
 */
cache.getAll().then(initialData => {
  ReactDOM.render(
    <Provider store={getStore(initialData)}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
  )
})
