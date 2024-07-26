<template>
  <div style="background-color: black">
    <AboutCard :data="caseStudyData" />
  </div>
</template>

<script>
import AboutCard from "../components/CaseStudy/AboutCard.vue";
import caseStudyData from "../assets/data/caseStudyData2.json";

export default {
  name: "CaseStudyView2",
  components: {
    AboutCard,
  },
  data() {
    return {
      caseStudyData: null,
    };
  },
  created() {
    const caseStudyId = this.$route.params.id;
    this.caseStudyData = caseStudyData[caseStudyId];
    if (!this.caseStudyData) {
      console.error("Case study not found");
    }
  },
};
</script>
