<template>
    <div class="web-development-service-view">
      <ServiceBanner :data="serviceData" />
      <FeatureSection :data="serviceData" />
      <IndustryStats :data="serviceData"/>
      <OurService :data="serviceData" />
      <DevelopmentMode :data="serviceData" />
      <ToolsAndFramework :data="serviceData" />
      <ClientReview :data="serviceData" />
      <AchievementsSlider :data="serviceData" />


    </div>
  </template>

  <script>
  import ServiceBanner from '@/components/Industry/ServiceBanner.vue';
  import OurService from '@/components/Industry/OurService.vue';
  import data from '../../../assets/data/industryData.json';
  import DevelopmentMode from '@/components/Industry/DevelopmentMode.vue';
  import ToolsAndFramework from '@/components/Industry/ToolsAndFramework.vue';
  import ClientReview from '@/components/Industry/ClientReview.vue';
  import AchievementsSlider from '@/components/Industry/AchievementsSlider.vue';
  import IndustryStats from '@/components/Industry/IndustryStats.vue';
  import FeatureSection from '@/components/Industry/FeatureSection.vue';

  export default {
    name: 'IndustryView',
    components: {
      ServiceBanner,
      IndustryStats,
      OurService,
      DevelopmentMode,
      ToolsAndFramework,
      ClientReview,
      AchievementsSlider,
      FeatureSection

    },
    props: {
      serviceType: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        json: data,
        serviceData: {}
      };
    },
    mounted() {
      this.loadServiceData();
      this.updateDeviceType();
      window.addEventListener('resize', this.updateDeviceType);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateDeviceType);
    },
    computed: {
      isMobile() {
        return window.innerWidth <= 768; // Adjust the width as needed
      }
    },
    methods: {
      loadServiceData() {
        if (this.serviceType in this.json) {
          this.serviceData = this.json[this.serviceType];
        } else {
          console.warn(`Service type ${this.serviceType} not found in JSON data.`);
          this.serviceData = {}; // Or handle as needed
        }
      },
      updateDeviceType() {
        this.$forceUpdate(); // Force re-render to update the device type
      }
    },
    watch: {
      // eslint-disable-next-line no-unused-vars
      serviceType(newVal) {
        this.loadServiceData();
      }
    }
  };
  </script>

  <style scoped>
  .web-development-service-view {
    background-color: white;
    color: black; /* Adjusted text color to be visible on a white background */
  }
  </style>
