<template>
    <div class="home">
      <CompanyPortfolio :data="portfolioList"></CompanyPortfolio>
    </div>
  </template>
  
  <script>
  import CompanyPortfolio from '@/components/CompanyPortfolio.vue';
  export default {
    name: 'PortfolioView',
    components: {
      CompanyPortfolio,
    }
  }
  </script>
  