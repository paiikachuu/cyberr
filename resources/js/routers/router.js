import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

const routers = [
    {   path: '/', name: 'app', component: () => import('../pages/Index') },
    {   path: '/admin', name: 'admin', component: () => import('../pages/Admin/Dashboard') },
  ];

export default new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes: routers
});
