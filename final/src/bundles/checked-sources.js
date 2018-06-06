import { createSelector } from 'redux-bundler'

import map from 'ramda/src/map'
import append from 'ramda/src/append'
import reject from 'ramda/src/reject'
import equals from 'ramda/src/equals'
import uniq from 'ramda/src/uniq'
import contains from 'ramda/src/contains'

/**
 * Redux bundle for checked Sources
 *
 * This bundle keeps the state of the sources checked.
 * And caches them so the user will always have the settings
 * they used last.
 */
export default {
  name: 'checkedSources',
  reducer: (state = { data: [] }, action) => {
    if (action.type === 'CHECKED_SOURCES_ADD') {
      state.data = uniq(append(action.payload, state.data))
      return state
    }
    if (action.type === 'CHECKED_SOURCES_REMOVE') {
      state.data = reject(equals(action.payload), state.data)
      return state
    }

    return state
  },
  doAddSource: sourceId => ({ dispatch }) => {
    dispatch({ type: 'CHECKED_SOURCES_ADD', payload: sourceId })
  },
  doRemoveSource: sourceId => ({ dispatch }) => {
    dispatch({ type: 'CHECKED_SOURCES_REMOVE', payload: sourceId })
  },
  selectChecked: state => state.checkedSources.data,
  selectCheckifySources: createSelector(
    'selectSources',
    'selectChecked',
    (sources, checked) => {
      return map(source => {
        if (contains(source.id, checked)) {
          source.checked = true
        } else {
          source.checked = false
        }
        return source
      }, sources || [])
    }
  ),
  persistActions: ['CHECKED_SOURCES_ADD', 'CHECKED_SOURCES_REMOVE']
}
