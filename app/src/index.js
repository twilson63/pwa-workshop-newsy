import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'redux-bundler-react'
import getStore from './bundles'

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

import App from './app'

ReactDOM.render(
  <Provider store={getStore()}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
