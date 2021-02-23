import Vue from 'vue'
import Vuex from 'vuex'
import applicationStates from './application-state'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        applicationStates,
    },
})
export default store
