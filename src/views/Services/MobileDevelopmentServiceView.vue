<template>
    <div class="web-development-service-view">
      <ServiceBanner :data="serviceData"></ServiceBanner>
      <!-- <PartnerCard></PartnerCard> -->
      <DevelopmentMode></DevelopmentMode>
      <StrategicProcess></StrategicProcess>
      <CompanyStats></CompanyStats>
      <IndustryCard></IndustryCard>
      <MarketFuture></MarketFuture>
      <ToolsAndFramework></ToolsAndFramework>
      <AchievementsSlider></AchievementsSlider>
      <AIFeatures></AIFeatures>
      <WebPortfolio></WebPortfolio>




    </div>
  </template>

  <script>
  import ServiceBanner from '@/components/Mobile/ServiceBanner.vue';
  // import PartnerCard from '@/components/Web/PartnerCard.vue';
  import IndustryCard from '@/components/Mobile/IndustryCard.vue';
  import DevelopmentMode from '../../components/Mobile/DevelopmentMode.vue';
  import data from '../../assets/data/servicesDescription.json';
  import CompanyStats from '@/components/Mobile/CompanyStats.vue';
  import AIFeatures from '@/components/Mobile/AIFeatures.vue';
  import WebPortfolio from '@/components/Mobile/WebPortfolio.vue';
  import StrategicProcess from '@/components/Mobile/StrategicProcess.vue'
  import MarketFuture from '../../components/Mobile/MarketFuture.vue';
  import ToolsAndFramework from '../../components/Mobile/ToolsAndFramework'
  import AchievementsSlider from '../../components/AchievementsSlider.vue'
  export default {
    name: 'WebDevelopmentServiceView',
    components: {
      ServiceBanner,
      IndustryCard,
      DevelopmentMode,
      CompanyStats,
      AIFeatures,
      WebPortfolio,
      StrategicProcess,
      MarketFuture,
      ToolsAndFramework,
      AchievementsSlider
    },
    data() {
      return {
        json: data,
        serviceData: []
      };
    },
    mounted() {
      this.serviceData = this.json[this.getKey];
    },
    computed: {
      getKey() {
        return this.$route.params.id;
      }
    },
    watch: {
      '$route.params.id': function(val) {
        this.serviceData = this.json[val];
      }
    }
  };
  </script>

  <style scoped>
  .web-development-service-view {
    background-color: white;
    color: white; /* Set text color to white */

  }
  </style>
