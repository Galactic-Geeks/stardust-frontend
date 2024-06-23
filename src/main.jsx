import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import theme from './utils/theme.js';
import Home from './pages/home/Home.jsx';
import Apod from './pages/apod/Apod.jsx';
import AstroEvents from './pages/astro-events/AstroEvents.jsx';
import RocketLaunches from './pages/rocket-launches/RocketLaunches.jsx';
import IssTracker from './pages/iss-tracker/IssTracker.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/apod',
        element: <Apod></Apod>
      },
      {
        path: '/astro-events',
        element: <AstroEvents></AstroEvents>
      },
      {
        path: '/rocket-launches',
        element: <RocketLaunches></RocketLaunches>
      },
      {
        path: '/iss-tracker',
        element: <IssTracker></IssTracker>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ColorModeScript initialColorMode={theme.config.initialColorMode}>
    </ColorModeScript>

    <ChakraProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>

  </React.StrictMode>,
)
