import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/main/Home';
import Mounting from './components/pages/Mounting';
import Updating from './components/pages/Updating';
import Unmounting from './components/pages/Unmounting';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "mounting",
    element: <Mounting/>,
  },
 
  {
    path: "updating",
    element: <Updating/>,
  },
  {
    path: "unmounting",
    element: <Unmounting/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} >
    <App />
    </RouterProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
