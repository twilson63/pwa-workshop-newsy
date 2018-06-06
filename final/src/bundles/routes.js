import { createRouteBundle } from 'redux-bundler'

import Articles from '../components/articles'
import Show from '../components/article'
import About from '../components/about'
import Custom from '../components/custom'
import Notfound from '../pages/notfound'

export default createRouteBundle({
  '/': Articles,
  '/index.html': Articles,
  '/custom': Custom,
  '/about': About,
  '/:articleType/:id': Show,
  '/*': Notfound
})
