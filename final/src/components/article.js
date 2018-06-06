import React from 'react'
import { connect } from 'redux-bundler-react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Spinner from './spinner'
import not from 'ramda/src/not'
import ImageNotAvailable from './newsy-placeholder.png'

/**
 * Article Component
 *
 * This component contains the information used to render
 * a single article view.
 *
 */
const Article = ({ article, classes, doUpdateUrl }) => {
  if (not(article)) {
    return <Spinner />
  }
  return (
    <div className={classes.root}>
      <Card>
        <CardMedia
          className={classes.media}
          image={article.urlToImage || ImageNotAvailable}
        />
        <CardContent>
          <Typography gutterBottom variant="headline">
            {article.title}
          </Typography>
          <Typography component="p">{article.description}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => (window.location = article.url)}>
            Read More
          </Button>
          <Button onClick={() => doUpdateUrl('/')}>Back</Button>
        </CardActions>
      </Card>
    </div>
  )
}

const styles = theme => ({
  root: {
    margin: '8px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
})

export default withStyles(styles)(
  connect(
    'selectArticle',
    'doUpdateUrl',
    Article
  )
)
