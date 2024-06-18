import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignInPage from './auth/sign-in/index.jsx';
import { Home, LayoutDashboard } from 'lucide-react';
import Dashboard from './dashboard/index.jsx/index.js';

const router = createBrowserRouter([
  {
    // path: '/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      }
    ]
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
