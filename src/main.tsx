import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/about/About';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Project from './pages/project/Project';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <Project />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='mainContainer'>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>,
)
