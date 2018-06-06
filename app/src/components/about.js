import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const About = ({ classes }) => (
  <div className={classes.root}>
    <Card>
      <CardContent>
        <Typography variant="headline">About</Typography>
      </CardContent>
    </Card>
  </div>
)

const styles = theme => ({
  root: {
    margin: '8px'
  }
})

export default withStyles(styles)(About)
