import Vue from "vue"
import VueRouter from "vue-router"
import store from '../store'

Vue.use(VueRouter);

import App from '../pages/Index'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ProductDetail from '../pages/Product'
import Search from '../pages/Search'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'

// Manage Side or Login Users
import ManageDashboard from '../pages/manage/Dashboard'
import ManageNotification from '../pages/manage/Notification'

// Admin Side
import AdminDashboard from '../pages/admin/Dashboard'
import AdminUsers from '../pages/admin/users/index'
import AdminProducts from '../pages/admin/Products'

const routers = [
    {   path: '/', name: 'app', component: App, meta: { guest:true} },
    {   path: '/login', name: 'login', component: Login, meta: { guest:true, layout:'blank'} },
    {   path: '/register', name: 'register', component: Register, meta: { guest:true, layout:'blank'} },
    {   path: '/product-detail', name: 'product-detail', component: ProductDetail },
    {   path: '/search', name: 'search', component: Search },
    {   path: '/cart', name: 'cart', component: Cart },
    {   path: '/checkout', name: 'checkout', component: Checkout },
    
    // Manage Side or Login Users 
    {   path: '/manage/dashboard', name: 'manage.dashboard', component: ManageDashboard, meta: { auth:true, layout:'admin'} },
    {   path: '/manage/notification', name: 'manage.notification', component: ManageNotification, meta: { auth:true, layout:'admin'} },
    
    // Admin Side
    {   path: '/admin/dashboard', name: 'admin.dashboard', component: AdminDashboard, meta: { auth:true, layout:'admin'} },
    {   path: '/admin/users', name: 'admin.users', component: AdminUsers, meta: { auth:true, layout:'admin'} },
    {   path: '/admin/products', name: 'admin.products', component: AdminProducts, meta: { auth:true, layout:'admin'} },
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
          path: '/admin/dashboard',
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
