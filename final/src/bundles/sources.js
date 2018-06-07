import { createAsyncResourceBundle, createSelector } from 'redux-bundler'

/**
 * Sources Bundle
 *
 * The newsapi has a lot of potential sources you can access to get the
 * latest news.
 */
const bundle = createAsyncResourceBundle({
  name: 'sources',
  getPromise: () =>
    fetch(`https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_API}`)
      .then(res => res.json())
      .then(result => result.sources)
})

bundle.reactShouldFetchSources = createSelector(
  'selectSourcesRaw',
  sourcesData => {
    if (sourcesData.loading || sourcesData.data) {
      return false
    }
    return { actionCreator: 'doFetchSources' }
  }
)

export default bundle
