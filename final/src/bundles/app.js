const initialState = { title: 'Newsy', drawer: false }

export default {
  name: 'app',
  reducer: (state = initialState, action) => {
    if (action.type === 'APP_DRAWER_TOGGLE') {
      state.drawer = action.payload
      return state
    }

    return state
  },
  doToggleDrawer: open => ({ dispatch }) =>
    dispatch({ type: 'APP_DRAWER_TOGGLE', payload: open }),
  selectTitle: state => state.app.title,
  selectDrawer: state => state.app.drawer
}
