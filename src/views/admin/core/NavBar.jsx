import * as React from 'react'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch
} from '@material-ui/core'
import {
  AccountCircle,
  Edit,
  ExitToApp,
  Message,
  Person,
  Settings,
  Timeline,
  Menu
} from '@material-ui/icons'

import NotificationsIcon from '@material-ui/icons/Notifications'
import SettingsContext from '../../../context/SettingsContext'
import ProperMenu from '../components/ProperMenu'
import PropTypes from 'prop-types'

const NavBar = ({ classes, open, toggleDrawer }) => {
  const { darkTheme, toggleTheme } = React.useContext(SettingsContext)

  return (
    <AppBar
      color='transparent'
      position='absolute'
      className={clsx(classes?.navBar, open && classes?.appBarShift)}
    >
      <Toolbar className={classes?.toolbar}>
        <IconButton
          edge='start'
          aria-label='open drawer'
          onClick={toggleDrawer}
          className={clsx(classes?.drawerButton)}
        >
          <Menu />
        </IconButton>
        <Typography component='h1' variant='h6' noWrap style={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Switch
          checked={darkTheme}
          onChange={toggleTheme}
          color='primary'
          name='toggle theme'
        />

        <ProperMenu icon={<NotificationsButton />}>
          <NotificationsList />
        </ProperMenu>

        <ProperMenu icon={<Person />}>
          <List>
            {settingsMenu.map((element, index) => (
              <ListItem button key={index}>
                <ListItemIcon>{element.icon}</ListItemIcon>
                <ListItemText primary={element.title} />
              </ListItem>
            ))}
          </List>
        </ProperMenu>
      </Toolbar>
    </AppBar>
  )
}

const settingsMenu = [
  {
    title: 'Profile',
    icon: <AccountCircle />
  },
  {
    title: 'Settings',
    icon: <Settings />
  },
  {
    title: 'Log out',
    icon: <ExitToApp />
  }
]

const notifs = [
  {
    title: '2 entries are uptated',
    subtitle: 'awaiting publication',
    icon: <Edit />
  },
  {
    title: 'statistics are up to date',
    subtitle: '',
    icon: <Timeline />
  },
  {
    title: 'you have 2 new messages',
    subtitle: '',
    icon: <Message />
  }
]

const NotificationsButton = () => (
  <Badge badgeContent={notifs.length} color='secondary'>
    <NotificationsIcon />
  </Badge>
)

const NotificationsList = () => (
  <>
    <List style={{ maxHeight: '250px', overflow: 'auto' }}>
      {notifs.map((element, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{element.icon}</ListItemIcon>
          <ListItemText primary={element.title} secondary={element.subtitle} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      <ListItem button>
        <ListItemText primary='View all' />
      </ListItem>
    </List>
  </>
)

NavBar.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  classes: PropTypes.object
}

export default NavBar
