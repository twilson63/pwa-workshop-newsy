import React from 'react'
import { connect } from 'redux-bundler-react'

import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/header'
import Drawer from './components/drawer'

/**
 * Newsy App Component
 *
 * This component manges the state of the drawer
 *
 */
const App = ({ route, title }) => {
  const Page = route
  return (
    <React.Fragment>
      <CssBaseline />
      <Drawer />
      <div>
        <Header>{title}</Header>
        <Page />
      </div>
    </React.Fragment>
  )
}

export default connect(
  'selectRoute',
  'selectTitle',
  App
)
