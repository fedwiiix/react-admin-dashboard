import * as React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Hidden from '@material-ui/core/Hidden'
import { Avatar, ListItemAvatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const menus = [
  [<DashboardIcon />, 'dashboard', '/admin'],
  [<PeopleIcon />, 'entries', '/admin/entries'],
  [<ShoppingCartIcon />, 'App users', '/admin/app-users'],
  [<BarChartIcon />, 'edit_entry', '/admin'],
  [<LayersIcon />, 'Charts', '/admin'],
  [<AssignmentIcon />, 'settings', '/admin']
]

const DrawerList = (
  <>
    <List>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar
            alt='Fred'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
          />
        </ListItemAvatar>
        <ListItemText primary='Fred' secondary='Jan 20, 2021' />
      </ListItem>
      <Divider variant='inset' component='li' />
      {menus.map(menu => (
        <Link
          to={menu[2]}
          key={'l' + menu[1]}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <ListItem button key={menu[1]}>
            <ListItemIcon>{menu[0]}</ListItemIcon>
            <ListItemText primary={menu[1]} />
          </ListItem>
        </Link>
      ))}
    </List>
  </>
)

const container = window !== undefined ? () => window.document.body : undefined

const AppDrawer = ({ classes, open, toggleDrawer }) => {
  return (
    <>
      <Hidden smUp implementation='css'>
        <Drawer
          container={container}
          variant='temporary'
          anchor='left'
          open={open}
          onClose={toggleDrawer}
          classes={{
            paper: classes?.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {DrawerList}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
        <Drawer
          variant='permanent'
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {DrawerList}
        </Drawer>
      </Hidden>
    </>
  )
}

AppDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  classes: PropTypes.object
}

export default AppDrawer
