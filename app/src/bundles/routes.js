import { createRouteBundle } from 'redux-bundler'

import Articles from '../components/articles'
import Custom from '../components/custom'
import About from '../components/about'

export default createRouteBundle({
  '/': Articles,
  '/custom': Custom,
  '/about': About
})
