import { lazy } from 'react'

export const routes = {
  homepage: {
    path: '/',
    component: lazy(() => import('../pages/Homepage/Homepage')),
    exact: true,
  }
}

export const renderRoutes = Object.entries(routes)
