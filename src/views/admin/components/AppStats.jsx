import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Typography, CardContent, Card } from '@material-ui/core'
import { Line } from 'react-chartjs-2'
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons'
import PropTypes from 'prop-types'

import graphSettings from '../config/appStatChart'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '140px'
  },
  graph: {
    position: 'absolute',
    bottom: '0',
    display: 'block',
    width: '100%',
    height: '65px'
  },
  title: {
    padding: theme.spacing(0.5)
  },
  wrapIcon: {
    verticalAlign: 'bottom',
    display: 'inline-flex',
    color: theme.palette.error.main
  },
  success: {
    color: theme.palette.success.main
  }
}))

const AppStats = ({ data }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} align='center'>
      {data.graph ? (
        <BackGraph data={data.graph} className={classes.graph} />
      ) : null}
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          {data.title}
        </Typography>
        <Typography variant='h4' className={classes.title}>
          {data.value}
        </Typography>
        {data.increase ? (
          <Increase increase={data.increase} classes={classes} />
        ) : null}
      </CardContent>
    </Card>
  )
}

AppStats.propTypes = {
  data: PropTypes.object.isRequired
}

export default AppStats

const BackGraph = ({ data, className }) => {
  return !data ? (
    ''
  ) : (
    <div className={className}>
      <Line data={data} options={graphSettings} />
    </div>
  )
}

const Increase = ({ increase, classes }) => (
  <Typography
    className={clsx(classes?.wrapIcon, increase > 0 && classes?.success)}
  >
    {increase > 0 ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
    {Math.abs(increase) + ' %'}
  </Typography>
)
