import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import styles from '../../assets/jss/appStyle'
import NavBar from './core/NavBar'
import Drawer from './core/Drawer'

const useStyles = makeStyles(styles)

const Admin = ({ children }) => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <NavBar classes={classes} open={mobileOpen} toggleDrawer={toggleDrawer} />
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Drawer
          classes={classes}
          open={mobileOpen}
          toggleDrawer={toggleDrawer}
        />
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

Admin.propTypes = {
  children: PropTypes.node
}

export default Admin
