import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Typography,Card,CardContent} from '@material-ui/core'
import { Divider } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
  }
})

const AppCard = ({ children, title }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant='h6'>
          {title}
        </Typography>
        <Divider />
        {children}
      </CardContent>
    </Card>
  )
}

AppCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default AppCard