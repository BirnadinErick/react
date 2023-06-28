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

const router = createBrowserRouter([
  {
    path: "/color-change",
    element: <ColorChange />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
 </React.StrictMode>,
)
