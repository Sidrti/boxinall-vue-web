<!-- ProjectsSection.vue -->
<template>
  <section id="projects" class="portfolio-grid">
    <h2 class="section-title" data-aos="fade-up">Our Projects</h2>
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
</template>

<script>
import portfolio from "../../assets/data/portfolioData2.json";

export default {
  name: "ProjectsSection",
  data() {
    return {
      projects: portfolio,
    };
  },
  methods: {
    viewCaseStudy(link) {
      this.$router.push(link);
    },
    exploreProject(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  background: linear-gradient(45deg, #007bff, #00dbd9);
  padding: 20px 0px;
  border-radius: 25px;
}
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
  padding: 20px 20px;
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
