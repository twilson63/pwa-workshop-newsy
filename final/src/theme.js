import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

/**
 * theme object
 *
 * Using Material UI you can define and customize a global theme
 *
 * for more information see: https://material-ui.com/customization/themes/
 *
 * Usage:
 *
 * ``` js
 * export default () =>
 *   <MuiThemeProvider theme={theme}>
 *     <App />
 *   </MuiThemeProvider>
 * ```
 */
export default createMuiTheme({
  palette: {
    primary: purple
  }
})
