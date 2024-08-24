// import { useState } from 'react'
// import './App.css'
import { PageLayout } from './components/pageLayout/PageLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { CartPage } from './pages/CartPage'
import { Page404 } from './pages/Page404'
import { LoginPage } from './pages/LoginPage'
import { Protected } from './components/protected/Protected'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <Page404 />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'product/:id',
        element: <ProductPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
  //   {
  //     path: 'login',
  //     element: (
  //       <Protected redirectTo={'/'}>
  //         <LoginPage />
  //       </Protected>
  //     ),
  //   },
])

function App() {
  return <RouterProvider router={router} />
}
export default App
