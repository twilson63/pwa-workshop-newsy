import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { connect } from 'redux-bundler-react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const Header = ({ classes, title, doToggleDrawer }) => (
  <div className={classes.root}>
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={() => doToggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title">{title}</Typography>
      </Toolbar>
    </AppBar>
  </div>
)

const styles = theme => ({
  root: {
    flex: 1
  },
  appBar: {
    backgroundColor: 'red'
  }
})

export default withStyles(styles)(
  connect(
    'selectTitle',
    'doToggleDrawer',
    Header
  )
)
