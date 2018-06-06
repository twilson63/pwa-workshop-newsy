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
    // fetch(`https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_KEY}`)
    //   .then(res => res.json())
    //   .then(doc => doc.sources)
    new Promise(resolve =>
      resolve([
        {
          name: 'Hacker News',
          id: 'hacker-news'
        },
        {
          name: 'ABC News',
          id: 'abc-news'
        },
        {
          name: 'CNN',
          id: 'cnn'
        },
        {
          name: 'Fox News',
          id: 'fox-news'
        },
        {
          id: 'the-verge',
          name: 'The Verge'
        },
        {
          id: 'engadget',
          name: 'Engadget'
        },
        {
          id: 'crypto-coins-news',
          name: 'Crypto Coins News'
        },
        {
          id: 'the-next-web',
          name: 'The Next Web'
        },
        {
          id: 'recode',
          name: 'Recode'
        },
        {
          id: 'ars-technica',
          name: 'Ars Technica'
        }
      ])
    )
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
