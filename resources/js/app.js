window.Vue = require('vue');

import Routes from './routers/router'
import App from './pages/App' 
import store from './store'

require('./bootstrap');

const app = new Vue({
    components: {App}, 
    router: Routes,
    store,
  }).$mount('#app')
