import { composeBundles } from 'redux-bundler'
import app from './app'
import routes from './routes'
import sources from './sources'

export default composeBundles(app, routes, sources)
