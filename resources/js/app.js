window.Vue = require('vue');

import Routes from './routers/router'
import App from './pages/App' 
import store from './store'

require('./bootstrap');

import DefaultLayout from './layouts/DefaultLayout'
import BlankLayout from './layouts/BlankLayout'
import AdminLayout from './layouts/AdminLayout'

Vue.component('default-layout', DefaultLayout)
Vue.component('blank-layout', BlankLayout)
Vue.component('admin-layout', AdminLayout)

const app = new Vue({
    components: {App}, 
    router: Routes,
    store,
}).$mount('#app')
