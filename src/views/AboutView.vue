<template>
  <div class="about">
    <AboutBanner></AboutBanner>
    <TeamMessage></TeamMessage>
    <VisionMission></VisionMission>
    <AboutBusiness></AboutBusiness>
    <ChooseUs></ChooseUs>
    <BusinessTimeline></BusinessTimeline>
  </div>
</template>
<script>
import AboutBanner from '@/components/AboutBanner.vue';
import TeamMessage from '@/components/TeamMessage.vue';
import VisionMission from '@/components/VisionMission.vue';
import AboutBusiness from '@/components/AboutBusiness.vue';
import ChooseUs from '@/components/ChooseUs.vue';
import BusinessTimeline from '@/components/BusinessTimeline.vue';

export default {
    components: { TeamMessage, AboutBanner, VisionMission, AboutBusiness, ChooseUs,BusinessTimeline }
}
</script>
