<template>
  <div>
    <WebBanner></WebBanner>
    <CompanyLogoSlider></CompanyLogoSlider>
    <CompanyStats></CompanyStats>
    <CompanyCategory></CompanyCategory>
    <CompanyPortfolio></CompanyPortfolio>
    <CompanyIndustry></CompanyIndustry>
    <ClientTestimonial></ClientTestimonial>
    <ShortContact></ShortContact>
  </div>
</template>

<script>
// @ is an alias to /src
import CompanyLogoSlider from '@/components/CompanyLogoSlider.vue';
import CompanyStats from '@/components/CompanyStats.vue';
import CompanyCategory from '@/components/CompanyCategory.vue';
import CompanyPortfolio from '@/components/CompanyPortfolio.vue';
import WebBanner from '@/components/WebBanner.vue'
import CompanyIndustry from '@/components/CompanyIndustry.vue'
import ClientTestimonial from '@/components/ClientTestimonial.vue'
import ShortContact from '@/components/ShortContact.vue'
export default {
  name: 'HomeView',
  components: {
    WebBanner,
    CompanyLogoSlider,
    CompanyStats,
    CompanyCategory,
    CompanyPortfolio,
    CompanyIndustry,
    ClientTestimonial,
    ShortContact
}
}
</script>
