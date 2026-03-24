import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from "./comonents/Home/Home";
import About from "./comonents/About/About";
import Layout from './Layout.jsx'
import Contact from "./comonents/Contact/Contact";
import User from "./comonents/User/User";
import Github from "./comonents/Github/Github";
import {Route} from "react-router-dom";
import { githubInfoLoader } from './comonents/Github/Github';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])


// ********Another way to create router using JSX********

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      {/* for taking user ID from URL */}
      <Route path='user/:userId' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path="github" 
      element={<Github />} 
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
