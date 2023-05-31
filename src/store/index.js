import Vue from 'vue'
import Vuex from 'vuex'
import contactModule from './contact.module'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      contact: contactModule,
    }
  })
export default store;