<template>
  <div class="home">
    <VideoBanner></VideoBanner>
    <CompanyPortfolio :data="portfolioList"></CompanyPortfolio>
  </div>
</template>

<script>
import CompanyPortfolio from "@/components/CompanyPortfolio2.vue";
import VideoBanner from "../components/VideoBanner.vue";
export default {
  name: "PortfolioView",
  components: {
    CompanyPortfolio,
    VideoBanner,
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
