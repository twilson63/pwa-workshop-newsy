import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/header'
import Articles from './components/articles'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Header />
        <Articles />
      </div>
    </React.Fragment>
  )
}

export default App
