import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])
