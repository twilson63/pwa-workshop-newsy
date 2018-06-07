import { connect } from 'redux-bundler-react'
import Articles from '../components/articles'

export default connect(
  'selectArticles',
  'doUpdateUrl',
  'selectArticlesIsLoading',
  Articles
)
