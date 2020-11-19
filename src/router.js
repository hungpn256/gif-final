import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProductListPage from './pages/ProductListPage/ProductListPage'
import ProductListLoginAction from './pages/ProductActionPage/LoginPage'
import ProductListRegisterAction from './pages/ProductActionPage/RegisterPage'
import Logout from './pages/ProductActionPage/Logout'
const routes =[
    {
        path:'/',
        exact:true,
        main:()=> <HomePage/>
    },
    {
        path:'/product-collection',
        exact:false,
        main:()=> <ProductListPage/>
    },
    {
        path:'/login',
        exact:false,
        main:()=> <ProductListLoginAction />
    },
    {
        path:'/register',
        exact:false,
        main:()=> <ProductListRegisterAction/>
    },
    {
        path:'',
        exact:false,
        main:()=> <NotFoundPage/>
    }
]
export default routes;
