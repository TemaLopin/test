import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainPage from '@/pages'

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
  ])

  return <RouterProvider router={router} />
}

export default Routing
