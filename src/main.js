import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueOwlCarousel from 'vue-owl-carousel'
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'
import '@/assets/css/darkmode.css'
// import '@/assets/css/plugin.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueTypedJs from 'vue-typed-js';

AOS.init();
Vue.use(VueTypedJs)
Vue.component('VueOwlCarousel', VueOwlCarousel)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

