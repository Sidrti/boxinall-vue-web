import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PortfolioView from "../views/PortfolioView";
import PortfolioView2 from "../views/PortfolioView2";
import ServiceView from "../views/ServiceView";
import AboutView from "../views/AboutView";
import ServiceDescriptionView from "../views/ServiceDescriptionView";
import MobileDevelopmentServiceView from "../views/Services/MobileDevelopmentServiceView";
import ContactView from "../views/ContactView";
import CaseStudyView from "../views/CaseStudyView";
import CaseStudyView2 from "../views/CaseStudyView2";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
  {
    path: "/portfolio2",
    name: "portfolio2",
    component: PortfolioView2,
  },
  {
    path: "/services",
    name: "services",
    component: ServiceView,
    // children: [{ path: 'process/:id',component: ServiceDescriptionView }],
  },
  // {
  //   path: "/process/website-development",
  //   name: "web-service-description",
  //   component: WebDevelopmentServiceView,
  // },
  {
    path: '/process/mobile-app-development-test',
    name: 'mobile-service-description',
    component: MobileDevelopmentServiceView,
  },
  {
    path: "/process/:id",
    name: "service-description",
    component: ServiceDescriptionView,
  },

  {
    path: "/about",
    name: "about",
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/case-study/:id",
    name: "case-study",
    component: CaseStudyView,
  },
  {
    path: "/case-study2/:id",
    name: "case-study2",
    component: CaseStudyView2,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
