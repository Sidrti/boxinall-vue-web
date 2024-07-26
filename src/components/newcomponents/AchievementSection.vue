<!-- AchievementsSection.vue -->
<template>
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
</template>

<script>
import achievements from "../../assets/data/achievements2.json";

export default {
  name: "AchievementsSection",
  data() {
    return {
      achievements: achievements,
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
  /* background: linear-gradient(45deg, #007bff, #00dbd9); */
  padding: 20px 0px;
  border-radius: 25px;
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

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }

  .achievements-container {
    flex-direction: column;
    align-items: center;
  }

  .achievement-item {
    width: 100%;
  }
}
</style>
