import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import map from 'ramda/src/map'
import NewsIcon from './news-icon'

import getArticles from '../lib/get-articles'
// TODO: remove when we add redux
const articles = getArticles()

const createList = () =>
  map(article => (
    <ListItem key={article._id} button>
      <NewsIcon />
      <ListItemText>
        <div style={{ float: 'right' }}>
          <Typography component="p">{article.source.name}</Typography>
        </div>
        {article.title}
      </ListItemText>
    </ListItem>
  ))

/**
 * Articles Component
 *
 * A component that shows all the articles for your custom sources list
 */
const Articles = ({ classes }) => {
  const list = createList()
  return <List>{list(articles || [])}</List>
}

export default Articles
