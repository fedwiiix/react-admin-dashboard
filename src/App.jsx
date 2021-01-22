import React, { useContext } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SettingsContext from './context/SettingsContext'
import light_theme from './assets/theme/light'
import dark_theme from './assets/theme/dark'
import routes from './routes'

export default function App () {
  const { darkTheme } = useContext(SettingsContext)
  const currentTheme = createMuiTheme(darkTheme ? dark_theme : light_theme)

  return (
    <MuiThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={props =>
                route.layout ? (
                  <route.layout {...props}>
                    <route.component {...props} routes={route.routes} />
                  </route.layout>
                ) : (
                  <route.component {...props} routes={route.routes} />
                )
              }
            />
          ))}
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}
