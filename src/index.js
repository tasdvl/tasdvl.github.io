import React from 'react';
import ReactDOM from 'react-dom/client';
import './frontend/index.css';
import App from './frontend/App';
import reportWebVitals from './frontend/reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Artpage from './frontend/pages/Artpage';
import AboutMe from './frontend/pages/AboutMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "art",
    element: <Artpage/>,
  },
  {
    path: "aboutme",
    element: <AboutMe/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
