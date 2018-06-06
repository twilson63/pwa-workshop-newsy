import React from 'react'
import { connect } from 'redux-bundler-react'

import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

/**
 * AppDrawer
 *
 * The navigation component
 *
 */
const AppDrawer = ({ classes, drawer, doToggleDrawer, doUpdateUrl }) => (
  <Drawer open={drawer} onClose={() => doToggleDrawer(false)}>
    <div className={classes.list} tabIndex={0} role="button">
      <Typography className={classes.menuTitle} variant="display1">
        Newsy Menu
      </Typography>
      <List>
        <ListItem
          button
          onClick={() => {
            doUpdateUrl('/')
            doToggleDrawer(false)
          }}
        >
          <ListItemText>My News</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            doUpdateUrl('/custom')
            doToggleDrawer(false)
          }}
        >
          <ListItemText>Customize</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            doUpdateUrl('/about')
            doToggleDrawer(false)
          }}
        >
          <ListItemText>About</ListItemText>
        </ListItem>
      </List>
    </div>
  </Drawer>
)

const styles = {
  list: {
    width: 250
  },
  menuTitle: {
    textAlign: 'center',
    marginTop: '8px',
    marginBottom: '16px'
  }
}

export default withStyles(styles)(
  connect(
    'selectDrawer',
    'doToggleDrawer',
    'doUpdateUrl',
    AppDrawer
  )
)
