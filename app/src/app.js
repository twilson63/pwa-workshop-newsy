import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/header'
import Articles from './components/articles'
import { connect } from 'redux-bundler-react'
import Drawer from './components/drawer'

const App = ({ route }) => {
  const Page = route
  return (
    <React.Fragment>
      <CssBaseline />
      <Drawer />
      <div>
        <Header />
        <Page />
      </div>
    </React.Fragment>
  )
}

export default connect(
  'selectRoute',
  App
)
