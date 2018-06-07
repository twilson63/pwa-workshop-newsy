import { connect } from 'redux-bundler-react'
import Header from '../components/header'

export default connect(
  'doToggleDrawer',
  'doFetchArticles',
  Header
)
