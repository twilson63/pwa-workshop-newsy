import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import NewsIcon from './news-avatar.png'
import purple from '@material-ui/core/colors/purple'

/**
 * News Avatar Component
 *
 */
const styles = theme => {
  return {
    purpleAvatar: {
      margin: 10,
      backgroundColor: purple
    }
  }
}

export default withStyles(styles)(() => {
  return <Avatar src={NewsIcon} alt="newsy" />
})
