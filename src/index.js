import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ToDoList from './components/ToDo/ToDoList';
import Counter from './components/Counter/Counter';
import Users from './components/Users/Users';
import User from './components/Users/User';
import { themeContext } from './contexts/themeContext';
import ThemeProvider from './providers/ThemeProvider';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: '/counter',
        element: <Counter />
      },
      {
        path: '/todo',
        element: <ToDoList />
      },
      {
        path: '/users',
        element: <Users />,
        children: [
          {
            path: ':id',
            element: <User />
          },
        ]
      },



    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
