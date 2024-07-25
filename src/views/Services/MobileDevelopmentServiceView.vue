<template>
    <div class="web-development-service-view">
      <ServiceBanner :data="serviceData"></ServiceBanner>
      <!-- <PartnerCard></PartnerCard> -->
      <DevelopmentMode></DevelopmentMode>
      <StrategicProcess></StrategicProcess>
      <CompanyStats></CompanyStats>

      <!-- Conditional Rendering based on Device Type -->
      <IndustryCardMobile v-if="isMobile"></IndustryCardMobile>
      <IndustryCardWeb v-else></IndustryCardWeb>

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
  import IndustryCardMobile from '@/components/Mobile/IndustryCardMobile.vue';
  import IndustryCardWeb from '@/components/Mobile/IndustryCardWeb.vue';
  import DevelopmentMode from '../../components/Mobile/DevelopmentMode.vue';
  import data from '../../assets/data/servicesDescription.json';
  import CompanyStats from '@/components/Mobile/CompanyStats.vue';
  import AIFeatures from '@/components/Mobile/AIFeatures.vue';
  import WebPortfolio from '@/components/Mobile/WebPortfolio.vue';
  import StrategicProcess from '../../components/Mobile/StrategicProcess.vue'
  import MarketFuture from '../../components/Mobile/MarketFuture.vue';
  import ToolsAndFramework from '../../components/Mobile/ToolsAndFramework'
  import AchievementsSlider from '../../components/AchievementsSlider.vue'

  export default {
    name: 'WebDevelopmentServiceView',
    components: {
      ServiceBanner,
      IndustryCardMobile,
      IndustryCardWeb,
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
      this.updateDeviceType();
      window.addEventListener('resize', this.updateDeviceType);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateDeviceType);
    },
    computed: {
      getKey() {
        return this.$route.params.id;
      },
      isMobile() {
        return window.innerWidth <= 768; // Adjust the width as needed
      }
    },
    methods: {
      updateDeviceType() {
        this.$forceUpdate(); // Force re-render to update the device type
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
    color: black; /* Adjusted text color to be visible on white background */
  }
  </style>
