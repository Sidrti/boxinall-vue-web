<template>
    <div class="home">
      <ServiceBanner :data="bannerData" :hideCtc="true"></ServiceBanner>
      <CompanyPortfolio :data="portfolioList"></CompanyPortfolio>
    </div>
  </template>
  
  <script>
  import CompanyPortfolio from '@/components/CompanyPortfolio.vue';
  import ServiceBanner from '@/components/ServiceBanner.vue';
  export default {
    name: 'PortfolioView',
    components: {
      CompanyPortfolio, ServiceBanner
    },
    data() {
    return {
      bannerData: {
        "title": "Portfolio",
        "subtitle": "",
      }
    }
  }
  }
  </script>
  