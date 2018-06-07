import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import ListSources from './sources'

/**
 * Customize your sources
 *
 * this component provides a checkbox list of sources you can use to
 * customize your news.
 */
const Custom = ({ classes, checkifySources, doUpdateUrl }) => (
  <div className={classes.root}>
    <Card>
      <CardContent>
        <Typography className={classes.headline} variant="headline">
          Customize Newsy
        </Typography>
        <ListSources source={checkifySources} />
      </CardContent>
      <CardActions>
        <Button onClick={() => doUpdateUrl('/')}>Back to Articles</Button>
      </CardActions>
    </Card>
  </div>
)

const styles = theme => ({
  root: {
    margin: '8px'
  },
  headline: {
    marginBottom: '16px'
  },
  subheading: {
    marginBottom: '16px'
  }
})

export default withStyles(styles)(Custom)
