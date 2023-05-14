<template>
    <div class="home">
      <CompanyPortfolio></CompanyPortfolio>
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
  