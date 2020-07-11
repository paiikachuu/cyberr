import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

const routers = [
    {   path: '/', name: 'app', component: () => import('../pages/Index') },
    {   path: '/login', name: 'login', component: () => import('../pages/auth/Login') },
    {   path: '/register', name: 'register', component: () => import('../pages/auth/Register') },
    {   path: '/product-detail', name: 'product-detail', component: () => import('../pages/ProductDetail') },

    // Admin Side
    {   path: '/admin', name: 'admin', component: () => import('../pages/admin/Dashboard') },
  ];

export default new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes: routers
});
