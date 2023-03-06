import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import { Dashboard } from './layouts/Dashboard'
import { dashboardLoader } from './loaders/dashboardLoader'
import { Profile } from './layouts/Profile'
import { Settings } from './layouts/Settings'
import Community from './layouts/Community'

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
          return dashboardLoader(params.id)
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
