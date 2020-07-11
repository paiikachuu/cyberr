import Vue from 'vue'
import Routes from './routers/router'
import App from './pages/App' 
import '@fortawesome/fontawesome-free/css/all.css'

require('./bootstrap');

  
const app = new Vue({
  components: {App}, 
  router: Routes
}).$mount('#app')