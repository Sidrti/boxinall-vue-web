<template>
  <div class="portfolio-page">
    <HeroSection @scroll-to-projects="scrollToProjects" />
    <ProjectSection />
    <SkillSection />
    <CTASection @contact-us="contactUs" />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./newcomponents/HeroSection.vue";
import ProjectSection from "./newcomponents/ProjectSection.vue";
import SkillSection from "./newcomponents/SkillSection.vue";
import CTASection from "./newcomponents/CTASection.vue";

export default {
  components: {
    HeroSection,
    ProjectSection,
    SkillSection,
    CTASection,
  },

  mounted() {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  },
  methods: {
    contactUs() {
      // Handle contact form or redirect to contact page
    },
    scrollToProjects() {
      const projectsSection = document.getElementById("projects");
      projectsSection.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.portfolio-page {
  background-color: #0a0a0a;
  color: #ffffff;
  padding-top: 45px;
  font-family: "Poppins", sans-serif;
}
</style>
