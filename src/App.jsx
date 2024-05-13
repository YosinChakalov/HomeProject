import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Third_page from './pages/Third_page/Third_page';
import Second_page from './pages/Second_page/Second_page';
import Last_page from './pages/Last_page/Last_page'
import Fourth_page from './pages/Fourth_page/Fourth_page'
import Fifth_page from './pages/Fifth_page/Fifth_page'
import Sixth_page from './pages/Sixth_page/Sixth_page'
import Main_page from './pages/Main_page/Main_page'
import Seventh_page from './pages/Seventh_page/Seventh_page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index:true,
        element:<Main_page/>
      },
      {
        path: '/sales',
        element: <Third_page />
      },
      {
        path: '/buy',
        element: <Second_page />
      },
      {
        path:"/blog",
        element:<Seventh_page/>
      },
      {
        path:"/shop",
        element:<Last_page/>
      },
      {
        path:"/prices",
        element:<Fourth_page/>
      },
      {
        path:'/help',
        element:<Fifth_page/>
      },
      {
        path:'/bonuses',
        element:<Sixth_page/>
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
