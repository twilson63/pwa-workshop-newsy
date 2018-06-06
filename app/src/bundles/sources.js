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
    Promise.resolve([
      { id: 'abc-news', name: 'ABC News' },
      { id: 'cnn', name: 'CNN' }
    ])
  // fetch('https://twilson63.jrscode.cloud/newsy/_find', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     authorization: 'Basic bmV3c3k6bmV3c3k='
  //   },
  //   method: 'POST',
  //   body: JSON.stringify({
  //     selector: { type: 'source' },
  //     limit: 10
  //   })
  // }).then(res => res.json())
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
