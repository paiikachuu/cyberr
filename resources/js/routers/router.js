import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import App from '../pages/Index'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ProductDetail from '../pages/Product'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
// Admin Side
import Dashboard from '../pages/admin/Dashboard'

const routers = [
    {   path: '/', name: 'app', component: App },
    {   path: '/login', name: 'login', component: Login },
    {   path: '/register', name: 'register', component: Register },
    {   path: '/product-detail', name: 'product-detail', component: ProductDetail },
    {   path: '/cart', name: 'cart', component: Cart },
    {   path: '/checkout', name: 'checkout', component: Checkout },
    // Admin Side
    {   path: '/admin', name: 'admin', component: Dashboard },
  ];

export default new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes: routers
});
