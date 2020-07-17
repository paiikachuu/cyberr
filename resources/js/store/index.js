
import Vue from 'vue'
import Vuex from 'vuex'
import currentUser from './modules/currentUser'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        currentUser
    },
})