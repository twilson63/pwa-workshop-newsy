import { composeBundles, createCacheBundle } from 'redux-bundler'
import app from './app'
import routes from './routes'
import articles from './articles'
import sources from './sources'
import checkedSources from './checked-sources'
import cache from '../utils/cache'

/**
 * Redux Bundle Manifest
 *
 * This module returns a function `getStore`
 * that can be used to create a redux store with
 * all the reducers, action creators, and selectors
 * for the application.
 */
export default composeBundles(
  routes,
  app,
  articles,
  sources,
  checkedSources,
  createCacheBundle(cache.set)
)
