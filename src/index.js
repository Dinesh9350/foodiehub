import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Help from './components/Help';
import Cart from './components/cart/Cart';
import SignIn from './components/header/SignIn';
import Error from './components/Error';
import Body from './components/Body';
import RestaurantDetails from './components/RestaurantDetails';
import Offers from './components/Offers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'help',
        element: <Help />,
      },
      {
        path: 'offers',
        element: <Offers />,
      },
      {
        path: 'restaurant/:id',
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();
