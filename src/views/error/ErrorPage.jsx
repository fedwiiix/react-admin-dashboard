import {
  Avatar,
  Button,
  Grid,
  Typography
} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import CodeIcon from '@material-ui/icons/Code'

const ErrorPage = ({ status }) => (
  <Grid
    container
    spacing={0}
    direction='column'
    alignItems='center'
    justify='center'
    style={{ minHeight: '100vh' }}
  >
    <Avatar style={{ height: '80px', width: '80px' }}>
      <CodeIcon />
    </Avatar>
    <Typography variant='h4' style={{ margin: '20px' }}>
      {status}
    </Typography>
    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <Button variant='contained' color='primary'>
        Go back to home page
      </Button>
    </Link>
  </Grid>
)

export default ErrorPage
