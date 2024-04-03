import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { Tech } from './Tech.jsx';
import { Media } from './Media.jsx';
import { Contact } from './Contact.jsx';
import { RickAndMorty } from './RickAndMorty.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tech/>,
  },
  {
    path: "/media",
    element: <Media/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/rm",
    element: <RickAndMorty/>
  },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);