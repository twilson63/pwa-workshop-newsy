/* global fetch */
import { createAsyncResourceBundle, createSelector } from 'redux-bundler'
import sha1 from 'sha1'
import map from 'ramda/src/map'
import assoc from 'ramda/src/assoc'
import find from 'ramda/src/find'
import propEq from 'ramda/src/propEq'
import pluck from 'ramda/src/pluck'
import filter from 'ramda/src/filter'
import contains from 'ramda/src/contains'
import path from 'ramda/src/path'
import compose from 'ramda/src/compose'
import __ from 'ramda/src/__'

const tag = article => assoc('_id', sha1(article.url), article)
const articleIsFrom = sources =>
  compose(
    contains(__, sources),
    path(['source', 'id'])
  )
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
      sources = 'abc-news'
    }
    // return fetch(
    //   `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${
    //     process.env.NEWS_KEY
    //   }`
    // )
    //   .then(res => res.json())
    //   .then(doc => doc.articles)
    //   .then(map(tag))

    return fetch(
      'https://twilson63.jrscode.cloud/newsy/_all_docs?include_docs=true&limit=1000',
      {
        headers: {
          authorization: 'Basic bmV3c3k6bmV3c3k='
        }
      }
    )
      .then(res => res.json())
      .then(res => pluck('doc', res.rows))
      .then(filter(articleIsFrom(sources)))
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
