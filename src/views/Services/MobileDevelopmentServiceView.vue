<template>
    <div class="web-development-service-view">
      <ServiceBanner :data="serviceData"></ServiceBanner>
      <!-- <PartnerCard></PartnerCard> -->
      <DevelopmentMode></DevelopmentMode>
      <StrategicProcess></StrategicProcess>
      <CompanyStats></CompanyStats>
      <IndustryCard></IndustryCard>
      <TechnologyBanner></TechnologyBanner>
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
  import TechnologyBanner from '@/components/Mobile/TechnologyBanner.vue';
  import AIFeatures from '@/components/Mobile/AIFeatures.vue';
  import WebPortfolio from '@/components/Mobile/WebPortfolio.vue';
  import StrategicProcess from '@/components/Mobile/StrategicProcess.vue'
  export default {
    name: 'WebDevelopmentServiceView',
    components: {
      ServiceBanner,
      IndustryCard,
      DevelopmentMode,
      CompanyStats,
      TechnologyBanner,
      AIFeatures,
      WebPortfolio,
      StrategicProcess
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
    background-color: black;
    color: white; /* Set text color to white */
    padding: 20px; /* Example padding, adjust as needed */
  }
  </style>
