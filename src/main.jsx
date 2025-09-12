import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home.jsx';
import SobreNos from './routes/SobreNos.jsx';
import Clubes from './routes/Clubes.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'sobrenos',
      element: <SobreNos />,
    },
    {
      path: 'clubes',
      element: <Clubes />,
    }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
