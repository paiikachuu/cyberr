import Vue from "vue"
import VueRouter from "vue-router"
import store from '../store'

Vue.use(VueRouter);

import App from '../pages/Index'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ProductDetail from '../pages/Product'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
// Admin Side
import Dashboard from '../pages/admin/Dashboard'
import Notification from '../pages/admin/Notification'
import AdminProducts from '../pages/admin/Products'

const routers = [
    {   path: '/', name: 'app', component: App, meta: { guest:true} },
    {   path: '/login', name: 'login', component: Login, meta: { guest:true, layout:'blank'} },
    {   path: '/register', name: 'register', component: Register, meta: { guest:true, layout:'blank'} },
    {   path: '/product-detail', name: 'product-detail', component: ProductDetail },
    {   path: '/cart', name: 'cart', component: Cart },
    {   path: '/checkout', name: 'checkout', component: Checkout },
    // Admin Side
    {   path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { auth:true, layout:'admin'} },
    {   path: '/notification', name: 'notification', component: Notification, meta: { auth:true, layout:'admin'} },
    {   path: '/admin-products', name: 'admin_products', component: AdminProducts, meta: { auth:true, layout:'admin'} },
  ];

  function isLoggedIn() {
    return store.state.currentUser.is_auth
  }

  const router = new VueRouter({
    mode:'history',
    routes: routers
  })

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
      if (!isLoggedIn()) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else if (to.matched.some(record => record.meta.guest)) {
      if (isLoggedIn()) {
        next({
          path: '/dashboard',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
    }
  })
  
export default router;
