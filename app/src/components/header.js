import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="title">Newsy</Typography>
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

export default withStyles(styles)(Header)
