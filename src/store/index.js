import Vue from 'vue'
import Vuex from 'vuex'
import contactModule from './contact.module'
import loaderModule from './loader.module'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      contact: contactModule,
      loader:loaderModule
    }
  })
export default store;