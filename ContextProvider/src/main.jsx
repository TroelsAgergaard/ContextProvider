import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import Frontpage from './pages/Frontpage.jsx';
const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Frontpage />}/>
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
