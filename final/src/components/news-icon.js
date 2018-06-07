import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import purple from '@material-ui/core/colors/purple'
import NewsIcon from './news-avatar.png'
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

export default withStyles(styles)(({ img }) => {
  return <Avatar src={NewsIcon} alt="newsy" />
})
