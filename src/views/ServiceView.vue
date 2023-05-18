<template>
  <div>
    <ServiceBanner :data="bannerData"></ServiceBanner>
    <ServiceOverview></ServiceOverview>
    <div class="service-block bg-gradient6 pad-tb">
      <div class="container text-start">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="common-heading ptag">
              <span>Service</span>
              <h2>Our Services</h2>
              <p class="mb30">We think big and have hands in all leading technology platforms to provide you wide array of
                services.</p>
            </div>
          </div>
        </div>
        <div class="row upset ovr-bg1 ho-gdnt">
          <DescriptiveCard :aosDelay="300" v-for="item,index in servicesList" :data="item" :key="index"></DescriptiveCard>
          <!-- <DescriptiveCard :aosDelay="600"></DescriptiveCard>
          <DescriptiveCard :aosDelay="900"></DescriptiveCard> -->
        </div>
      </div>
    </div>
    <ChooseUs></ChooseUs>
    <CompanyAwards></CompanyAwards>
  </div>
</template>
<script>
import ServiceBanner from '@/components/ServiceBanner.vue';
import DescriptiveCard from '@/components/DescriptiveCard.vue';
import ChooseUs from '@/components/ChooseUs.vue';
import CompanyAwards from '@/components/CompanyAwards.vue';
import ServiceOverview from '@/components/ServiceOverview.vue';
import data from '../assets/data/service.json'
export default {
  components: { ServiceBanner, DescriptiveCard, ChooseUs, CompanyAwards, ServiceOverview },
  data() {
    return {
      servicesList: data,
      bannerData:{
        "title": "We Create Digital Products That Aid in the Growth of Your Business ",
        "subtitle": "From Startup to Enterprise be ready and don't worry about design and user experience.",
      }
    }
  },
  
}
</script>
