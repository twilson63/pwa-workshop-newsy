import React from 'react'
import Spinner from './spinner'
import url from 'url'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import map from 'ramda/src/map'
import NewsIcon from './news-icon'

const createList = doUpdateUrl =>
  map(article => {
    const uri = url.parse(article.url)
    const img = `${uri.protocol}//${uri.host}/favicon.ico`
    return (
      <ListItem
        key={article._id}
        button
        onClick={() => doUpdateUrl('/articles/' + article._id)}
      >
        <NewsIcon img={img} />
        <ListItemText>
          <div style={{ float: 'right' }}>
            <Typography component="p">{article.source.name}</Typography>
          </div>
          {article.title}
        </ListItemText>
      </ListItem>
    )
  })

/**
 * Articles Component
 *
 * A component that shows all the articles for your custom sources list
 */
const Articles = ({ classes, articles, doUpdateUrl, articlesIsLoading }) => {
  if (articlesIsLoading) {
    return <Spinner />
  }
  const list = createList(doUpdateUrl)
  return <List>{list(articles || [])}</List>
}

export default Articles
