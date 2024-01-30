import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider, // Navigate, Link,
} from 'react-router-dom';

import App from './App';
import ErrorPage from './component/error';

const router = createBrowserRouter([
  {
    path: '/frontendmentor',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
