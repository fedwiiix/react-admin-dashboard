import React from 'react'
import { Redirect } from 'react-router-dom'

// Layout Types
// import { DefaultLayout } from "./layouts";

// Route Views
import Login from './views/connection/Login'
import SignUp from './views/connection/SignUp'

import ErrorPage from './views/error/ErrorPage'

import DefaultAdminLayout from './views/admin/admin'
import AppUsers from './views/admin/pages/AppUsers'
import Entries from './views/admin/pages/Entries'
import Dashboard from './views/admin/pages/Dashboard'

const routes = [
  {
    path: '/',
    exact: true,
    // layout: DefaultLayout,
    component: () => <Redirect to="/admin/" />
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/sign-up',
    component: SignUp
  },
  {
    path: '/admin',
    exact: true,
    layout: DefaultAdminLayout,
    component: Dashboard
  },
  {
    path: '/admin/entries',
    layout: DefaultAdminLayout,
    component: Entries
  },
  {
    path: '/admin/app-users',
    layout: DefaultAdminLayout,
    component: AppUsers
  },
  {
    path: '*',
    exact: true,
    component: () => <ErrorPage status="404 - not found" />
  }
  // routes: [
  //   {
  //     path: "/admin/",
  //     exact: true,
  //     component: Dashboard
  //   },
  // ]
  // }
]

export default routes
