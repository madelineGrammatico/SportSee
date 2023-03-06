import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import { Dashboard } from './layouts/Dashboard'
import { dashboardLoader } from './loaders/dashboardLoader'

const router = createBrowserRouter([
  { path: "/",
    element: <RootLayout/>,
    children: [
      { 
        index:true,
        element: <Navigate to="/dashboard" replace/>
      },
      {
        path: "/dashboard/:id",
        element: <Dashboard/>,
        loader: ({params}) => {
          return dashboardLoader(params.id)
        }
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
