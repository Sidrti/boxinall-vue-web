import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView'
import ServiceView from '../views/ServiceView'
import AboutView from '../views/AboutView'
import ServiceDescriptionView from '../views/ServiceDescriptionView'
import WebDevelopmentServiceView from '../views/Services/WebDevelopmentServiceView'
import MobileDevelopmentServiceView from '../views/Services/MobileDevelopmentServiceView'
import ContactView from '../views/ContactView'
import CaseStudyView from '../views/CaseStudyView'


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
    path: '/process/website-development',
    name: 'web-service-description',
    component: WebDevelopmentServiceView,
  },
  {
    path: '/process/mobile-app-development',
    name: 'mobile-service-description',
    component: MobileDevelopmentServiceView,
  },
  {
    path: '/process/:id',
    name: 'service-description',
    component: ServiceDescriptionView,
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/case-study/:id',
    name: 'case-study',
    component: CaseStudyView,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
})

export default router
