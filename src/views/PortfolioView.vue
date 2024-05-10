<template>
    <div class="home">
      <VideoBanner></VideoBanner>
      <!-- <ServiceBanner :data="bannerData" :hideCtc="true" ></ServiceBanner> -->
      <CompanyPortfolio :data="portfolioList"></CompanyPortfolio>
    </div>
  </template>
  
  <script>
  import CompanyPortfolio from '@/components/CompanyPortfolio.vue';
  // import ServiceBanner from '@/components/ServiceBanner.vue';
  import VideoBanner from '../components/VideoBanner.vue'
  export default {
    name: 'PortfolioView',
    components: {
      CompanyPortfolio, 
      // ServiceBanner,
      VideoBanner
    },
    data() {
    return {
      bannerData: {
        "title": "Portfolio",
        "titleColor":'white',
        "subtitle": "",
      }
    }
  }
  }
  </script>
  