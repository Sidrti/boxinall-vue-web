<template>
    <div>
      <ServiceBanner :data="bannerData" :hideCtc="true"></ServiceBanner>
      <ProjectCaseStudyAbout :data="caseStudyData"></ProjectCaseStudyAbout>
      <ProjectFeatures :data="caseStudyData.features"></ProjectFeatures>
      <ProjectChallenges :data="caseStudyData.challenges"></ProjectChallenges>
      <CompanyAwards></CompanyAwards>
    </div>
  </template>
  <script>
  import ServiceBanner from '@/components/ServiceBanner.vue';
  import ProjectCaseStudyAbout from '@/components/ProjectCaseStudyAbout.vue'
  import ProjectFeatures from '@/components/ProjectFeatures.vue'
  import ProjectChallenges from '@/components/ProjectChallenges.vue'
  import CompanyAwards from '@/components/CompanyAwards.vue'
  import data from '../assets/data/caseStudy.json';
  export default {
    components: { ServiceBanner,ProjectCaseStudyAbout,ProjectFeatures,ProjectChallenges,CompanyAwards },
    data() {
      return {
        caseStudyData:data,
        bannerData:{
          "title": "",
          "subtitle": "",
        }
      }
    },
    mounted() {
        if(this.caseStudyData.length != 0) {
            this.caseStudyData = this.caseStudyData[this.getKey]
            this.bannerData.title = this.caseStudyData.title;
        }
    },
    computed: {
    getKey() {
      return this.$route.params.id
    }
  }
  }
  </script>
  