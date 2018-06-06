import React from 'react'
import { connect } from 'redux-bundler-react'
import Spinner from './spinner'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

import map from 'ramda/src/map'

const createList = (doAddSource, doRemoveSource) =>
  map(source => (
    <ListItem key={source.id}>
      <Checkbox
        tabIndex={-1}
        disableRipple
        checked={source.checked}
        onChange={() =>
          source.checked ? doRemoveSource(source.id) : doAddSource(source.id)
        }
      />
      <ListItemText>{source.name}</ListItemText>
    </ListItem>
  ))

/**
 * Sources Component
 *
 * This component is the child component inside the custom component
 *
 */
const Sources = ({
  classes,
  sources,
  sourcesIsLoading,
  doAddSource,
  doRemoveSource
}) => {
  if (sourcesIsLoading) {
    return <Spinner />
  }
  const list = createList(doAddSource, doRemoveSource)
  return <List>{list(sources || [])}</List>
}

export default connect(
  'selectSources',
  'doAddSource',
  'doRemoveSource',
  'selectSourcesIsLoading',
  Sources
)
