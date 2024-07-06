import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import RootLayout from './pages/root'

function App() {
  const router = createBrowserRouter([
    { path: '/', 
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children:[
        { index: true, element: <HomePage /> },
        { path: '/about', element: <AboutPage /> },
        { path: '/contact', element: <ContactPage /> },
        { path: '/products', element: <Products /> },
        { path: '/products/:productId', element: <ProductDetails /> },
      ],
      
    }
  ])
  return <RouterProvider router={router}></RouterProvider>;
}

export default App
