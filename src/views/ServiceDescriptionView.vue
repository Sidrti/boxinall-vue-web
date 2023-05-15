<template>
  <div>
    <ServiceBanner :data="serviceData" v-if="serviceData.length !=0"></ServiceBanner>
    <DescriptiveText :data="serviceData" v-if="serviceData.length !=0"></DescriptiveText>
    <ProjectProcess :data="serviceData" v-if="serviceData.length !=0"></ProjectProcess>
    <CompanyAwards></CompanyAwards>
  </div>
</template>
  
<script>
import ServiceBanner from '@/components/ServiceBanner.vue';
import ProjectProcess from '@/components/ProjectProcess.vue';
import CompanyAwards from '@/components/CompanyAwards.vue';
import DescriptiveText from '@/components/DescriptiveText.vue';
import data from '../assets/data/servicesDescription.json'

export default {
  name: 'ServiceDescriptionView',
  components: {
    ServiceBanner,
    ProjectProcess,
    CompanyAwards,
    DescriptiveText
  },
  data() {
    return {
      serviceData: data
    }
  },
  mounted() {
    this.serviceData = this.serviceData[this.getKey]
  },
  computed: {
    getKey() {
      if(this.$route.params.id == 'app-development') {
        return 'app';
      }
      return this.$route.params.id
    }
  }
}
</script>
  