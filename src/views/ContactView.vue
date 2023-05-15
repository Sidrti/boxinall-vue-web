<template>
    <div>
        <EnquiryForm></EnquiryForm>
        <CompanyOffice></CompanyOffice>
    </div>
  </template>
  <script>
import EnquiryForm from '@/components/EnquiryForm.vue';
import CompanyOffice from '@/components/CompanyOffice.vue';

export default {
      components: { EnquiryForm,CompanyOffice }
  }
  </script>
  