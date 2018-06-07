import { connect } from 'redux-bundler-react'
import Article from '../components/article'

export default connect(
  'selectArticle',
  'doUpdateUrl',
  Article
)
