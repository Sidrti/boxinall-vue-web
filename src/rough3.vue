<template>
  <div class="portfolio-page">
    <!-- Hero Section -->
    <!-- <section class="hero-section">
      <div class="hero-content" data-aos="fade-right" data-aos-duration="1000">
        <h1 class="hero-title">Showcase of Innovation and Excellence</h1>
        <p class="hero-subtitle">
          Explore Our Portfolio of Transformative Projects Across Industries
        </p>
        <button
          @click="scrollToProjects"
          class="cta-button"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Discuss Your Project
        </button>
      </div>
      <div class="hero-image" data-aos="fade-left" data-aos-duration="1000">
        <img src="../assets/images/Boxinall@123.png" alt="Hero Image" />
      </div>
    </section> -->

    <HeroSection @scroll-to-projects="scrollToProjects" />

    <!-- Projects Section -->
    <section id="projects" class="portfolio-grid">
      <h2 class="section-title" data-aos="fade-up">Our Latest Projects</h2>
      <div class="projects-container">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
          :class="{ reverse: project.orientation === 'right' }"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="project-image" data-aos="fade-right" data-aos-delay="200">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="project-info" data-aos="fade-left" data-aos-delay="300">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech-stack">
              <!-- <span
                v-for="(tech, techIndex) in project.stack"
                :key="techIndex"
                class="tech-tag"
              >
                {{ tech }}
              </span> -->
              <span
                v-for="(tech, index) in project.stack"
                :key="index"
                class="stackitem"
              >
                {{ tech }}
                <span
                  v-if="index < project.stack.length - 1"
                  class="stackitem-separator"
                >
                  |
                </span>
              </span>
            </div>
            <div class="project-buttons">
              <button
                @click="viewCaseStudy(project.link)"
                class="view-details-btn"
              >
                Case Study
              </button>
              <button
                @click="exploreProject(project.sitelink)"
                class="view-details-btn"
              >
                Explore Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <h2 class="section-title" data-aos="fade-up">Our Expertise</h2>
      <div class="skills-container">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="skill-item"
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-delay="index * 100"
        >
          <div class="skill-icon">
            <i :class="skill.icon"></i>
          </div>
          <h3 class="skill-title">{{ skill.name }}</h3>
          <p class="skill-description">{{ skill.description }}</p>
        </div>
      </div>
    </section>

    <!-- Achievements Section -->
    <section class="achievements-section">
      <h2 class="section-title" data-aos="fade-up">Our Achievements</h2>
      <div class="achievements-container">
        <div
          v-for="(achievement, index) in achievements"
          :key="index"
          class="achievement-item"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="index * 100"
        >
          <div class="achievement-number">
            {{ achievement.value }}{{ achievement.suffix }}
          </div>
          <div class="achievement-label">{{ achievement.label }}</div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="cta-content" data-aos="zoom-in">
        <h2 class="cta-title">Ready to bring your ideas to life?</h2>
        <p class="cta-description">
          Let's collaborate on your next digital project
        </p>
        <button @click="/contact" class="cta-button">Get in Touch</button>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import portfolio from "../assets/data/portfolioData2.json";
import skills from "../assets/data/skills2.json";
import achievements from "../assets/data/achievements2.json";
import HeroSection from "./newcomponents/HeroSection.vue";

export default {
  components: {
    HeroSection,
  },
  data() {
    return {
      projects: portfolio,
      skills: skills,
      achievements: achievements,
    };
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  },
  methods: {
    viewProject(link) {
      window.open(link, "_blank");
    },
    contactUs() {
      // Handle contact form or redirect to contact page
    },
    viewCaseStudy(link) {
      this.$router.push(link);
    },
    exploreProject(link) {
      window.open(link, "_blank");
    },
    scrollToProjects() {
      const projectsSection = document.getElementById("projects");
      projectsSection.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.view-details-btn {
  align-self: flex-start;
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.view-details-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: all 0.4s ease;
}

.view-details-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.view-details-btn:hover::before {
  left: 100%;
}

.view-details-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
}
.portfolio-page {
  background-color: #0a0a0a;
  color: #ffffff;
  padding-top: 85px;
  font-family: "Poppins", sans-serif;
}

.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background: linear-gradient(135deg, #000, #000);
  overflow: hidden;
}

.hero-content {
  max-width: 50%;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  background: linear-gradient(45deg, #007bff, #00dbd9);
  padding: 20px 20px;
  border-radius: 25px;
  text-align: center;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.hero-image {
  width: 45%;
  height: 80%;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 123, 255, 0.3);
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  background: linear-gradient(45deg, #007bff, #00dbd9);
  padding: 20px 0px;
  border-radius: 25px;
}

/* .portfolio-grid {
  padding: 5% 10%;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: #1a1a1a;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 123, 255, 0.3);
}

.project-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-info {
  padding: 2rem;
}

.project-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #007bff;
}

.project-description {
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background-color: #007bff;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.tech-tag:hover {
  background-color: #0056b3;
}

.view-project-btn {
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.view-project-btn:hover {
  background-color: #007bff;
  color: white;
} */

.skills-section {
  background-color:;
  padding: 5% 10%;
}

.skills-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
}

.skill-item {
  text-align: center;
  max-width: 250px;
  padding: 2rem;
  background-color: #2a2a2a;
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 123, 255, 0.2);
}

.skill-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #007bff;
}

.skill-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00dbd9;
}

.skill-description {
  font-size: 1rem;
  opacity: 0.8;
}

.achievements-section {
  padding: 5% 10%;
  background: linear-gradient(135deg, #007bff, #00dbd9);
}

.achievements-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
}

.achievement-item {
  text-align: center;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.achievement-item:hover {
  transform: scale(1.05);
}

.achievement-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.achievement-label {
  font-size: 1.2rem;
  opacity: 0.9;
}

.cta-section {
  background: url("../assets/images/Boxinall@123.png") center/cover no-repeat;
  padding: 8% 10%;
  object-fit: contain;
  text-align: center;
  position: relative;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.cta-description {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #ffffff;
  opacity: 0.9;
}

.cta-button {
  background: linear-gradient(45deg, #007bff, #00dbd9);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 123, 255, 0.4);
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    height: auto;
    padding: 15% 5%;
  }

  .hero-content,
  .hero-image {
    max-width: 100%;
    width: 100%;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  /* .projects-container {
    grid-template-columns: 1fr;
  } */

  .skills-container,
  .achievements-container {
    flex-direction: column;
    align-items: center;
  }

  .skill-item,
  .achievement-item {
    width: 100%;
  }

  .cta-title {
    font-size: 2.5rem;
  }

  .cta-description {
    font-size: 1.1rem;
  }
}

.portfolio-grid {
  padding: 5% 10%;
}

.projects-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.project-card {
  display: flex;
  background-color: #1a1a1a;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 20px 10px;
}

.project-card.reverse {
  flex-direction: row-reverse;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 123, 255, 0.3);
}

.project-image {
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-info {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007bff;
}

.project-description {
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background-color: #007bff;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.tech-tag:hover {
  background-color: #0056b3;
}

.stackitem {
  color: white;
  font-size: 20px;
  font-weight: 600;
}

.stackitem-separator {
  margin: 0 5px;
}

.project-buttons {
  display: flex;
  gap: 1rem;
}

.case-study-btn,
.explore-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  flex: 1;
}

.case-study-btn {
  background-color: #007bff;
  color: white;
  border: none;
}

.explore-btn {
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}

.case-study-btn:hover,
.explore-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
}

.explore-btn:hover {
  background-color: #007bff;
  color: white;
}

@media (max-width: 968px) {
  .project-card,
  .project-card.reverse {
    flex-direction: column;
  }

  .project-image,
  .project-info {
    width: 100%;
  }

  .project-image {
    height: 300px;
  }

  .project-title {
    font-size: 1.8rem;
  }

  .project-buttons {
    flex-direction: column;
  }
}

@media (max-width: 576px) {
  .portfolio-grid {
    padding: 5%;
  }

  .project-image {
    height: 200px;
  }

  .project-title {
    font-size: 1.5rem;
  }

  .project-description {
    font-size: 0.9rem;
  }

  .tech-tag {
    font-size: 0.8rem;
  }

  .case-study-btn,
  .explore-btn {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
