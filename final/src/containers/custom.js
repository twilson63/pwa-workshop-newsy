import Custom from '../components/custom'
import { connect } from 'redux-bundler-react'

export default connect(
  'selectCheckifySources',
  'doUpdateUrl',
  Custom
)
