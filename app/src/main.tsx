import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// routes
import ColorChange from './routes/ColorChange.tsx'

// main css
import './index.css'
import Header from './components/header.tsx'

const router = createBrowserRouter([
  {
    path: "/color-change",
    element: <ColorChange />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
 </React.StrictMode>,
)
