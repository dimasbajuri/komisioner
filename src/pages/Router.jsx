// ./src/pages/Router.jsx
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Profiles from './Profiles'
import Layout from '../components/Layout'
import Category from './Category'
import Atasan from './categories/Atasan'
import Sepatu from './categories/Sepatu'
import Shopee from './categories/Shopee'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/profile',
                element: <Profiles />
            },
            {
                path: '/category',
                element: <Category />,
                children: []
            },
            {
                path: '/category/atasan',
                element: <Atasan />
            },
            
        ]
    },
])

export default router