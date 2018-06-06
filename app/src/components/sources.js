import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

import map from 'ramda/src/map'

const createList = () =>
  map(source => (
    <ListItem key={source.id}>
      <Checkbox tabIndex={-1} disableRipple />
      <ListItemText>{source.name}</ListItemText>
    </ListItem>
  ))

const Sources = ({ classes, sources }) => {
  const list = createList()
  return <List>{list(sources || [])}</List>
}

export default Sources
