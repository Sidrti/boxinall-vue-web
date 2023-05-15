import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView'
import ServiceView from '../views/ServiceView'
import AboutView from '../views/AboutView'
import ServiceDescriptionView from '../views/ServiceDescriptionView'
import ContactView from '../views/ContactView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/services',
    name: 'services',
    component: ServiceView,
    // children: [{ path: 'process/:id',component: ServiceDescriptionView }],
  },
  {
    path: '/process/:id',
    name: 'service-description',
    component: ServiceDescriptionView,
  },
  {
    path: '/about',
    name: 'about',
    // component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
]

const router = new VueRouter({
  routes
})

export default router
