import Vue from 'vue'
import vueroute from './routers/router'
import App from './pages/App'

require('./bootstrap');
import '@fortawesome/fontawesome-free/css/all.css'
  
const app = new Vue({
  components: {
    App
  }, 
  router: vueroute
}).$mount('#app')