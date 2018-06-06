import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

/**
 * Spinner Component
 *
 * Usage:
 *
 * <Spinner />
 *
 */
const Spinner = ({ classes }) => (
  <div className={classes.root}>
    <CircularProgress />
  </div>
)

const styles = theme => ({
  root: {
    height: '100vh',
    minHeight: '100vh',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default withStyles(styles)(Spinner)
