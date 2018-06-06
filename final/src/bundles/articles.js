/* global fetch */
import { createAsyncResourceBundle, createSelector } from 'redux-bundler'
import find from 'ramda/src/find'
import propEq from 'ramda/src/propEq'

/**
 * Redux bundle for Articles
 *
 * This bundle manages the fetching of articles as well
 * as finding the selected article
 */
const bundle = createAsyncResourceBundle({
  name: 'articles',
  getPromise: ({ getState }) => {
    let sources = getState().checkedSources.data.join(',')
    if (sources.length === 0) {
      sources = ['abc-news']
    }

    return fetch('https://twilson63.jrscode.cloud/newsy/_find', {
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Basic bmV3c3k6bmV3c3k='
      },
      method: 'POST',
      body: JSON.stringify({
        selector: {
          type: 'article',
          'source.id': {
            $in: sources
          }
        }
      })
    })
      .then(res => res.json())
      .then(res => res.docs)
  }
})

bundle.selectArticle = createSelector(
  'selectRouteParams',
  'selectArticles',
  (routeParams, articles) => {
    if (articles) {
      const article = find(propEq('_id', routeParams.id))(articles)
      return article
    }
    return { title: 'Article Not Found' }
  }
)

bundle.reactShouldFetchArticles = createSelector(
  'selectArticlesRaw',
  articlesData => {
    if (articlesData.loading || articlesData.data) {
      return false
    }
    return { actionCreator: 'doFetchArticles' }
  }
)

export default bundle
