<template>
  <div>
    <!-- <ServiceBanner :data="bannerData" :hideCtc="true"></ServiceBanner> -->
    <EnquiryForm></EnquiryForm>
    <CompanyOffice></CompanyOffice>
  </div>
</template>
<script>
import EnquiryForm from '@/components/EnquiryForm.vue';
import CompanyOffice from '@/components/CompanyOffice.vue';
// import ServiceBanner from '@/components/ServiceBanner.vue';

export default {
components: { EnquiryForm, CompanyOffice },
  data() {
    return {
      bannerData: {
        "title": "Contact Us",
        "subtitle": "",
      }
    }
  },
}
</script>
  