import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home.jsx';
import SobreNos from './routes/SobreNos.jsx';
import Clubes from './routes/Clubes.jsx';
import Login from './routes/Login.jsx';
import Loja from './routes/Loja.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/loja',
      element: <Loja />,
    },
    {
      path: 'sobrenos',
      element: <SobreNos />,
    },
    {
      path: 'clubes',
      element: <Clubes />,
    },
    {
      path: 'home',
      element: <Home />,
    }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
