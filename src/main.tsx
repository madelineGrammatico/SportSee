import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout/RootLayout'
import { Dashboard } from './layouts/Dasboard/Dashboard'
import { dashboardLoader } from './loaders/dashboardLoader'
import { Profile } from './layouts/Profile'
import { Settings } from './layouts/Settings'
import Community from './layouts/Community'
import { Page501 } from './layouts/501Page/501Page'

const router = createBrowserRouter([
  { path: "/",
    element: <RootLayout/>,
    children: [
      { 
        index:true,
        element: <Navigate to="/dashboard/12" replace/>
      },
      {
        path: "/dashboard/:id",
        element: <Dashboard/>,
        loader: ({params}) => {
          return dashboardLoader(Number(params.id))
        }
      },
      {
        path: "/profile/:id",
        element: <Profile/>
      },
      {
        path: "/setting/:id",
        element: <Settings/>
      },
      {
        path: "/community/:id",
        element: <Community/>
      },
      {
        path: "/501",
        element: <Page501/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <RouterProvider router={router}/>
)
