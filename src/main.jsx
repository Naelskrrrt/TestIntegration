import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ListeFournisseur from './ListeFournisseur.jsx'
import './index.css'

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/fournisseur",
    element: <ListeFournisseur />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)

