import { connect } from 'redux-bundler-react'
import Drawer from '../components/drawer'

export default connect(
  'selectDrawer',
  'doToggleDrawer',
  'doUpdateUrl',
  Drawer
)
