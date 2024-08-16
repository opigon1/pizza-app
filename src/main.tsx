import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout.tsx';
import Product from './pages/Product/Product.tsx';
import Cart from './pages/Cart/Cart.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Product />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <RouterProvider router={router}></RouterProvider>
    </App>
  </StrictMode>
);
