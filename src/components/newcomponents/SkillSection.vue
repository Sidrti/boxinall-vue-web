<template>
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
        <!-- <div class="skill-icon">
          <i :class="skill.icon"></i>
        </div> -->
        <h3 class="skill-title">{{ skill.name }}</h3>
        <p class="skill-description">{{ skill.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import skills from "../../assets/data/skills2.json";

export default {
  name: "SkillsSection",
  data() {
    return {
      skills: skills,
    };
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
.skills-section {
  background-color: #fff;
  padding: 5% 10%;
}

.skills-container {
  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;
  gap: 0.2rem; /* Adds space between cards */
}

.skill-item {
  text-align: center;
  max-width: 250px;
  padding: 2rem;
  background-color: #2a2a2a;
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1.5rem; /* Adds vertical space between rows */

}
.skill-item:first-child {
  margin-left: 0; /* No margin on the left for the first item */
}

.skill-item:last-child {
  margin-right: 0; /* No margin on the right for the last item */
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
@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }

  .skills-container {
    flex-direction: column;
    align-items: center;
  }

  .skill-item {
    width: 100%;
  }
}
</style>
