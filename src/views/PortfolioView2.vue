<template>
  <div class="home">
    <CompanyPortfolio :data="portfolioList"></CompanyPortfolio>
  </div>
</template>

<script>
import CompanyPortfolio from "@/components/CompanyPortfolio2.vue";
export default {
  name: "PortfolioView",
  components: {
    CompanyPortfolio,
  },
  data() {
    return {
      bannerData: {
        title: "Portfolio",
        titleColor: "white",
        subtitle: "",
      },
    };
  },
};
</script>
