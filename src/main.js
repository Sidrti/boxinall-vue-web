import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueOwlCarousel from 'vue-owl-carousel'
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'
// import '@/assets/css/darkmode.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueTypedJs from 'vue-typed-js';
import VueNumber from "vue-number-animation";

Vue.config.productionTip = false

AOS.init();
Vue.use(VueNumber)
Vue.use(VueTypedJs)
Vue.component('VueOwlCarousel', VueOwlCarousel)
require('../src/utils/validation');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

