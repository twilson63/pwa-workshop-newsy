import React from 'react'
import { connect } from 'redux-bundler-react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

/**
 * About Component
 *
 * This component contains all of the about information for the application
 *
 */
const About = ({ classes, doUpdateUrl }) => (
  <div className={classes.root}>
    <Card>
      <CardContent>
        <Typography className={classes.headline} variant="headline">
          About Newsy
        </Typography>
        <Typography className={classes.subheading} variant="subheading">
          Get the news you want from the sources you trust!
        </Typography>
        <Typography className={classes.p} component="p">
          Newsy is a customized mobile news application, enabling you to get the
          news you want from the sources that you trust.
        </Typography>
        <Typography className={classes.p} component="p">
          This app was built for learning purposes and is provided as is. If you
          are interested in adding new features or would like to report bugs or
          make suggestions, please visit the project repository on github.{' '}
          <br />
          <a
            className={classes.a}
            target="_new"
            href="https://github.com/twilson63/newsy"
          >
            https://github.com/twilson63/newsy
          </a>
        </Typography>
        <Typography className={classes.p} component="p">
          This app was built by the instructors of the JRS Coding School.
          <br />
          <a className={classes.a} target="_new" href="http://jrscode.com">
            http://jrscode.com
          </a>
        </Typography>
        <Typography className={classes.p} component="p">
          The data of the application is provided by newsapi.org. <br />
          <a className={classes.a} target="_new" href="https://newsapi.org">
            https://newsapi.org
          </a>
        </Typography>
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
    fontSize: '1.2em',
    color: 'lightgray',
    marginBottom: '16px'
  },
  p: {
    marginTop: '8px',
    marginBottom: '16px'
  },
  a: {
    marginTop: '8px'
  }
})

export default withStyles(styles)(
  connect(
    'doUpdateUrl',
    About
  )
)
