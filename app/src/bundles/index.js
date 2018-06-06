import { composeBundles, createCacheBundle } from 'redux-bundler'
import app from './app'
import routes from './routes'
import sources from './sources'
import cache from '../utils/cache'

export default composeBundles(
  app,
  routes,
  sources,
  createCacheBundle(cache.set)
)
