import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Main } from './routes/main.tsx'
import { Stacks } from './routes/stacks.tsx'
import { Projects } from './routes/projects.tsx'
import { About } from './routes/about.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "/tecnologies",
        element: <Stacks/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/about",
        element: <About/>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
