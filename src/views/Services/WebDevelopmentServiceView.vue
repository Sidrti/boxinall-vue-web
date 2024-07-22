<template>
  <div class="web-development-service-view">
    <ServiceBanner :data="serviceData"></ServiceBanner>
    <!-- <PartnerCard></PartnerCard> -->
    <IndustryCard></IndustryCard>
    <StrategicProcess></StrategicProcess>
    <CompanyStats></CompanyStats>
    <TechnologyBanner></TechnologyBanner>
    <AIFeatures></AIFeatures>
    <WebPortfolio></WebPortfolio>


  </div>
</template>

<script>
import ServiceBanner from '@/components/Web/ServiceBanner.vue';
// import PartnerCard from '@/components/Web/PartnerCard.vue';
import IndustryCard from '@/components/Web/IndustryCard.vue';
import data from '../../assets/data/servicesDescription.json';
import CompanyStats from '@/components/Web/CompanyStats.vue';
import TechnologyBanner from '@/components/Web/TechnologyBanner.vue';
import AIFeatures from '@/components/Web/AIFeatures.vue';
import WebPortfolio from '@/components/Web/WebPortfolio.vue';
import StrategicProcess from '@/components/Web/StrategicProcess.vue'
export default {
  name: 'WebDevelopmentServiceView',
  components: {
    ServiceBanner,
    IndustryCard,
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
