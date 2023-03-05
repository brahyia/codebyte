import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Admin from './Pages/Admin Page/Admin';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Admin />,
    },
    {
        path: '/admin',
        element:  <Admin />,
    }
]);

const Main = () => (
    <RouterProvider router={router} />
);

export default Main;
