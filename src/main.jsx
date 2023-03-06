import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'

import RootLayout from './layout/RootLayout'

const router = createBrowserRouter([
  { path: "/",
    element: <RootLayout/>,
    children: [
      { 
        index:true,
        element: <Navigate to="/home" replace/>
      },
      {
        path: "/home",
        element: <App/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
