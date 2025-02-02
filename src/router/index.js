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
// import CaseStudyView from "../views/CaseStudyView";
import CaseStudyView2 from "../views/CaseStudyView2";
import WebDevelopmentServiceView from "@/views/Services/WebDevelopmentServiceView.vue";
import IndustryView from  "@/views/Services/Industry/IndustryView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/portfolio3",
    name: "portfolio3",
    component: PortfolioView,
  },
  {
    path: '/portfolio/:tab?',
    name: "portfolio",
    component: PortfolioView2,
  },
  {
    path: "/services",
    name: "services",
    component: ServiceView,
    // children: [{ path: 'process/:id',component: ServiceDescriptionView }],
  },
  {
    path: "/process/website-development-test",
    name: "web-service-description",
    component: WebDevelopmentServiceView,
  },
  {
    path: '/process/mobile-app-development-test',
    name: 'mobile-service-description',
    component: MobileDevelopmentServiceView,
  },
  {
    path: "/process/services/:serviceType",
    name: "industry-view",
    component: IndustryView,
    props: true // Enables passing route params as props
  },
  // {
  //   path: "/process/services/ecommerce-app-development",
  //   name: "ecommerce-app-development",
  //   component: IndustryView,
  // },
  // {
  //   path: "/process/services/travel-app-development",
  //   name: "ecommerce-app-development",
  //   component: IndustryView,
  // },
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
  // {
  //   path: "/case-study/:id",
  //   name: "case-study",
  //   component: CaseStudyView,
  // },
  {
    path: "/case-study/:id",
    name: "case-study",
    component: CaseStudyView2,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Specify the routes for which you want to maintain scroll position
    const maintainScrollRoutes = ['portfolio2'];

    if (savedPosition) {
      // Always return saved position if available
      return savedPosition;
    } else if (maintainScrollRoutes.includes(to.name) && maintainScrollRoutes.includes(from.name)) {
      // Maintain the current scroll position when navigating between these routes
      return { x: window.scrollX, y: window.scrollY };
    } else {
      // Default behavior: scroll to the top of the page
      return { x: 0, y: 0 };
    }
  },
  // scrollBehavior() {
  //   return { x: 0, y: 0 };
  // },
});

export default router;
