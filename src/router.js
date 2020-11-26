import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProductListPage from './pages/ProductListPage/ProductListPage'
import ProductListLoginAction from './pages/ProductActionPage/LoginPage'
import ProductListRegisterAction from './pages/ProductActionPage/RegisterPage'
const routes =[
    {
        path:'/gif-final/',
        exact:true,
        main:()=> <HomePage/>
    },
    {
        path:'/gif-final/product-collection',
        exact:false,
        main:()=> <ProductListPage/>
    },
    {
        path:'/gif-final/login',
        exact:false,
        main:()=> <ProductListLoginAction />
    },
    {
        path:'/gif-final/register',
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
