import { createRouteBundle } from 'redux-bundler'

import Articles from '../containers/articles'
import Show from '../containers/article'
import About from '../containers/about'
import Custom from '../containers/custom'
import Notfound from '../pages/notfound'

export default createRouteBundle({
  '/': Articles,
  '/index.html': Articles,
  '/custom': Custom,
  '/about': About,
  '/:articleType/:id': Show,
  '/*': Notfound
})
