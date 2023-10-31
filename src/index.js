import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import SignupPage from './components/Signup';
import MainPage from './components/Main';
import SignIn from './components/signIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupPage/>,
  },
  {
    path: "/main",
    element: <MainPage/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);