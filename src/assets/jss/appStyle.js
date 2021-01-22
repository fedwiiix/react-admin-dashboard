import { drawerWidth} from './variables'

const appStyle = theme => ({
  root: {
    display: 'flex'
  },
  navBar: {
    boxShadow:'none',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  drawerPaper: {
    // backgroundImage: 'url(https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg)',
    // backgroundColor: 'rgba(0,0,0,0.7)',
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: '100px'
  }
})

export default appStyle
