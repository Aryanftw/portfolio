import React from 'react';
import './main.css';
import Intropage from './components/Intropage';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/", // This corresponds to "/"
    element: <Intropage />, // This will load at the root
  },
  {
    path: "/home", // This corresponds to "/home"
    element: <Home />, // This will load at /home
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
