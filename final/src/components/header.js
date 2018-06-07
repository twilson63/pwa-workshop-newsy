import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'

/**
 * Header Component
 *
 * This component provides the header for the application
 */
const Header = ({ children, doToggleDrawer, classes, doFetchArticles }) => (
  <AppBar position="sticky">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="Menu"
        onClick={() => doToggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Typography className={classes.flex} variant="title" color="inherit">
        {children}
      </Typography>
      <Button color="inherit" onClick={() => doFetchArticles()}>
        Refresh
      </Button>
    </Toolbar>
  </AppBar>
)

const styles = theme => ({
  flex: {
    flex: 1
  }
})

export default withStyles(styles)(Header)
